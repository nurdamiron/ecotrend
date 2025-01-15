// src/components/containers/ContainerStats.jsx
import React from 'react';
import { formatVolume, formatCurrency } from '../../utils/formatters';

export const ContainerStats = ({ 
  temperature, 
  pressure, 
  pricePerLiter, 
  currentVolume, 
  totalCost 
}) => {
  return (
    <div className="space-y-4">
      {/* Technical Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Температура</p>
          <p className="font-medium">{temperature}°C</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Давление</p>
          <p className="font-medium">{pressure} kPa</p>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="pt-4 border-t">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Цена за литр</p>
            <p className="font-medium">{formatCurrency(pricePerLiter)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Объем</p>
            <p className="font-medium">{formatVolume(currentVolume)}</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-sm">Общая стоимость</p>
          <p className="text-lg font-semibold">{formatCurrency(totalCost)}</p>
        </div>
      </div>
    </div>
  );
};
