// src/context/AppContext.jsx
import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ContainerProvider } from './ContainerContext';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { user, loading: authLoading, error: authError } = useAuth();

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Загрузка...</div>
      </div>
    );
  }

  if (authError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Ошибка аутентификации: {authError}</div>
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ user }}>
      <ContainerProvider>
        {children}
      </ContainerProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};