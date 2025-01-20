// src/hooks/useContainers.js
import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { db } from '../config/firebase';
import { CONTAINER_STATUSES, CONTAINER_LIMITS, REFRESH_INTERVAL } from '../config/constants';
import { useFirebase } from './useFirebase';
import { calculateVolume, calculateTotalCost } from '../utils/calculations';

export const useContainers = () => {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateRecord, createRecord, deleteRecord } = useFirebase();

  useEffect(() => {
    const containerRef = ref(db, '/');
    
    const processContainerData = (id, data) => {
      try {
        // Получаем массивы имен, цен и объемов
        const names = Object.values(data.names || {});
        const prices = Object.values(data.prices || {}).map(Number);
        const tanks = Object.values(data.tanks || {}).map(Number);

        // Рассчитываем общий объем и среднюю цену
        const totalVolume = tanks.reduce((a, b) => a + b, 0);
        const averagePrice = prices.reduce((a, b) => a + b, 0) / prices.length;

        // Вычисляем процент заполнения
        const liquidLevel = (totalVolume / data.account) * 100;

        // Определяем статус на основе уровня жидкости и лимитов
        let status = CONTAINER_STATUSES.ACTIVE;
        if (liquidLevel < 20) {
          status = CONTAINER_STATUSES.WARNING;
        } else if (liquidLevel < 10) {
          status = CONTAINER_STATUSES.ERROR;
        }

        // Формируем массив продуктов
        const products = names.map((name, index) => ({
          name,
          price: prices[index],
          volume: tanks[index]
        }));

        return {
          id,
          name: `Контейнер ${id.slice(-4)}`,
          status,
          liquidLevel,
          temperature: 20, // Можно добавить реальные датчики
          pressure: 101, // Можно добавить реальные датчики
          pricePerLiter: averagePrice,
          capacity: data.account || 0,
          totalVolume,
          totalCost: calculateTotalCost(totalVolume, averagePrice),
          products,
          lastUpdate: Date.now(),
          limits: {
            minTemp: CONTAINER_LIMITS.MIN_TEMPERATURE,
            maxTemp: CONTAINER_LIMITS.MAX_TEMPERATURE,
            minPressure: CONTAINER_LIMITS.MIN_PRESSURE,
            maxPressure: CONTAINER_LIMITS.MAX_PRESSURE,
          }
        };
      } catch (err) {
        console.error(`Error processing container ${id}:`, err);
        return null;
      }
    };

    const handleData = (snapshot) => {
      try {
        const data = snapshot.val();
        if (!data) {
          setContainers([]);
          return;
        }

        const processedContainers = Object.entries(data)
          .map(([id, containerData]) => processContainerData(id, containerData))
          .filter(container => container !== null);

        setContainers(processedContainers);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error processing data:', err);
      } finally {
        setLoading(false);
      }
    };

    const handleError = (err) => {
      setError(err.message);
      setLoading(false);
    };

    // Подписываемся на обновления
    onValue(containerRef, handleData, handleError);

    // Устанавливаем интервал обновления
    const intervalId = setInterval(() => {
      const containerRef = ref(db, '/');
      onValue(containerRef, handleData, handleError, { onlyOnce: true });
    }, REFRESH_INTERVAL);

    // Очищаем при размонтировании
    return () => {
      clearInterval(intervalId);
      off(containerRef);
    };
  }, []);

  // Обновление контейнера
  const updateContainer = async (containerId, updates) => {
    return await updateRecord(`/${containerId}`, updates);
  };

  // Добавление нового контейнера
  const addContainer = async (containerData) => {
    const newContainerId = Date.now().toString();
    return await createRecord(`/${newContainerId}`, {
      ...containerData,
      createdAt: Date.now()
    });
  };

  // Удаление контейнера
  const deleteContainer = async (containerId) => {
    return await deleteRecord(`/${containerId}`);
  };

  // Получение контейнера по ID
  const getContainerById = (containerId) => {
    return containers.find(container => container.id === containerId);
  };

  return {
    containers,
    loading,
    error,
    updateContainer,
    addContainer,
    deleteContainer,
    getContainerById
  };
};