
// src/pages/Statistics.jsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useContainerContext } from '../context/containerContext';
import { calculateUsage, calculateEfficiency } from '../utils/calculations';
import { formatDate, formatVolume } from '../utils/formatters';

export const Statistics = () => {
  const { containers } = useContainerContext();
  const [usageData, setUsageData] = useState([]);
  const [efficiency, setEfficiency] = useState(0);

  useEffect(() => {
    if (containers.length > 0) {
      // Здесь можно добавить реальную логику расчета использования
      const data = containers.map(container => ({
        name: container.name,
        usage: calculateUsage(100, container.liquidLevel, container.capacity),
        timestamp: Date.now()
      }));
      setUsageData(data);
      setEfficiency(calculateEfficiency(data));
    }
  }, [containers]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Статистика</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Использование жидкости</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="timestamp" 
                tickFormatter={(value) => formatDate(value)} 
              />
              <YAxis tickFormatter={(value) => formatVolume(value)} />
              <Tooltip 
                formatter={(value) => formatVolume(value)}
                labelFormatter={(value) => formatDate(value)}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="usage" 
                stroke="#3b82f6" 
                name="Расход" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
