// src/hooks/useContainerControls.js
import { useCallback } from 'react';

export const useContainerControls = (containerId) => {
  const openPriceSettings = useCallback(() => {
    console.log('Opening price settings for container:', containerId);
    // Здесь будет логика открытия модального окна настроек цены
  }, [containerId]);

  const openConfigSettings = useCallback(() => {
    console.log('Opening config settings for container:', containerId);
    // Здесь будет логика открытия модального окна конфигурации
  }, [containerId]);

  return {
    openPriceSettings,
    openConfigSettings
  };
};
