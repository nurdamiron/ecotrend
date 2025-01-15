// src/context/ContainerContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { useContainers } from '../hooks/useContainers';

const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const {
    containers,
    loading,
    error,
    updateContainer,
    addContainer,
    deleteContainer,
    getContainerById
  } = useContainers();

  const handlePriceUpdate = async (containerId, newPrice) => {
    const result = await updateContainer(containerId, {
      pricePerLiter: parseFloat(newPrice)
    });
    if (result.success) {
      setIsPriceModalOpen(false);
    }
    return result;
  };

  const handleConfigUpdate = async (containerId, config) => {
    const result = await updateContainer(containerId, config);
    if (result.success) {
      setIsConfigModalOpen(false);
    }
    return result;
  };

  const openPriceModal = (containerId) => {
    setSelectedContainer(getContainerById(containerId));
    setIsPriceModalOpen(true);
  };

  const openConfigModal = (containerId) => {
    setSelectedContainer(getContainerById(containerId));
    setIsConfigModalOpen(true);
  };

  const value = {
    containers,
    loading,
    error,
    selectedContainer,
    isPriceModalOpen,
    isConfigModalOpen,
    updateContainer,
    addContainer,
    deleteContainer,
    handlePriceUpdate,
    handleConfigUpdate,
    openPriceModal,
    openConfigModal,
    setIsPriceModalOpen,
    setIsConfigModalOpen
  };

  return (
    <ContainerContext.Provider value={value}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainerContext = () => {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error('useContainerContext must be used within a ContainerProvider');
  }
  return context;
};