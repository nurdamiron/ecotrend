// src/hooks/useContainers.js
import { useState, useEffect } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { db } from '../config/firebase';
import { DATABASE_PATHS, REFRESH_INTERVAL } from '../config/constants';
import { useFirebase } from './useFirebase';

export const useContainers = () => {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateRecord, createRecord, deleteRecord } = useFirebase();

  // Загрузка данных контейнеров
  useEffect(() => {
    const containerRef = ref(db, DATABASE_PATHS.CONTAINERS);
    
    const handleData = (snapshot) => {
      try {
        const data = snapshot.val();
        if (data) {
          const containersArray = Object.entries(data).map(([id, value]) => ({
            id,
            ...value
          }));
          setContainers(containersArray);
        } else {
          setContainers([]);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const handleError = (err) => {
      setError(err.message);
      setLoading(false);
    };

    onValue(containerRef, handleData, handleError);

    return () => {
      off(containerRef);
    };
  }, []);

  // Обновление контейнера
  const updateContainer = async (containerId, updates) => {
    const path = `${DATABASE_PATHS.CONTAINERS}/${containerId}`;
    return await updateRecord(path, updates);
  };

  // Добавление нового контейнера
  const addContainer = async (containerData) => {
    const path = `${DATABASE_PATHS.CONTAINERS}/${Date.now()}`;
    return await createRecord(path, {
      ...containerData,
      createdAt: Date.now()
    });
  };

  // Удаление контейнера
  const deleteContainer = async (containerId) => {
    const path = `${DATABASE_PATHS.CONTAINERS}/${containerId}`;
    return await deleteRecord(path);
  };

  // Получение конкретного контейнера по ID
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

