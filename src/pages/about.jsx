

// src/pages/About.jsx
import React from 'react';

export const About = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">О системе</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Система мониторинга контейнеров</h2>
          
          <div className="prose max-w-none">
            <p>
              Система предназначена для мониторинга и управления контейнерами с жидкостями.
              Позволяет отслеживать:
            </p>
            
            <ul>
              <li>Уровень жидкости в реальном времени</li>
              <li>Температуру и давление</li>
              <li>Расход жидкости</li>
              <li>Стоимость содержимого</li>
            </ul>

            <h3>Возможности системы:</h3>
            <ul>
              <li>Мониторинг параметров в реальном времени</li>
              <li>Настройка уведомлений</li>
              <li>Управление ценами</li>
              <li>Просмотр статистики</li>
              <li>Конфигурация параметров контейнеров</li>
            </ul>

            <p>
              Версия системы: 1.0.0<br />
              Дата обновления: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};