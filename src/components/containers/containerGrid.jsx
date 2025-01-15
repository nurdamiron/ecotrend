// src/components/containers/ContainerGrid.jsx
import React from 'react';
import { ContainerCard } from './containerCard';
import { useContainers } from '../../hooks/useContainers';

export const ContainerGrid = () => {
  const { containers, loading, error } = useContainers();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500">Ошибка: {error}</div>
      </div>
    );
  }

  if (!containers?.length) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Нет доступных контейнеров</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {containers.map(container => (
        <ContainerCard key={container.id} container={container} />
      ))}
    </div>
  );
};
