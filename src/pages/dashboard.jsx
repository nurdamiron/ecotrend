// src/pages/Dashboard.jsx
import React from 'react';
import { ContainerGrid } from '../components/containers/containerGrid';
import { useContainerContext } from '../context/containerContext';

export const Dashboard = () => {
  const { loading, error } = useContainerContext();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Панель управления</h1>
      </div>
      <ContainerGrid />
    </div>
  );
};

