// src/pages/Settings.jsx
import React from 'react';
import { useContainerContext } from '../context/containerContext';
import { CONTAINER_LIMITS } from '../config/constants';

export const Settings = () => {
  const { containers, updateContainer } = useContainerContext();

  const handleLimitChange = async (containerId, field, value) => {
    await updateContainer(containerId, { [field]: value });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Настройки</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Настройки контейнеров</h2>
          
          <div className="space-y-4">
            {containers.map(container => (
              <div 
                key={container.id} 
                className="p-4 border rounded-lg space-y-4"
              >
                <h3 className="font-medium">{container.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Минимальная температура (°C)
                    </label>
                    <input
                      type="number"
                      value={container.minTemp || CONTAINER_LIMITS.MIN_TEMPERATURE}
                      onChange={(e) => handleLimitChange(
                        container.id, 
                        'minTemp', 
                        parseFloat(e.target.value)
                      )}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Максимальная температура (°C)
                    </label>
                    <input
                      type="number"
                      value={container.maxTemp || CONTAINER_LIMITS.MAX_TEMPERATURE}
                      onChange={(e) => handleLimitChange(
                        container.id, 
                        'maxTemp', 
                        parseFloat(e.target.value)
                      )}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};