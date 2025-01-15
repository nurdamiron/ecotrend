
// src/components/containers/ContainerControls.jsx
import React from 'react';
import { Edit, Settings } from 'lucide-react';
import { useContainerControls } from '../../hooks/useContainerControls';

export const ContainerControls = ({ containerId }) => {
  const { 
    openPriceSettings, 
    openConfigSettings 
  } = useContainerControls(containerId);

  return (
    <div className="space-y-2 pt-4 border-t">
      <button
        onClick={openPriceSettings}
        className="w-full flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Edit className="w-4 h-4 mr-2" />
        Настройки цены
      </button>
      
      <button
        onClick={openConfigSettings}
        className="w-full flex items-center justify-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Settings className="w-4 h-4 mr-2" />
        Конфигурация
      </button>
    </div>
  );
};
