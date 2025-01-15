// src/components/containers/ContainerCard.jsx
import React from 'react';
import { Battery, Droplet } from 'lucide-react';
import { ContainerStats } from './containerStats';
import { ContainerControls } from './containerControls';

export const ContainerCard = ({ container }) => {
  const currentVolume = (container.capacity * container.liquidLevel) / 100;
  const totalCost = currentVolume * container.pricePerLiter;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{container.name}</h3>
        <Battery 
          className={`w-6 h-6 ${container.status ? 'text-green-500' : 'text-red-500'}`} 
        />
      </div>

      {/* Liquid Level Indicator */}
      <div className="flex items-center space-x-2">
        <Droplet className="w-6 h-6 text-blue-500" />
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2 transition-all duration-500"
            style={{ width: `${container.liquidLevel}%` }}
          />
        </div>
        <span className="text-sm font-medium">{container.liquidLevel}%</span>
      </div>

      {/* Stats */}
      <ContainerStats 
        temperature={container.temperature}
        pressure={container.pressure}
        pricePerLiter={container.pricePerLiter}
        currentVolume={currentVolume}
        totalCost={totalCost}
      />

      {/* Controls */}
      <ContainerControls containerId={container.id} />
    </div>
  );
};





// src/utils/formatters.js
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

export const formatVolume = (value) => {
  return `${value.toFixed(1)} л`;
};