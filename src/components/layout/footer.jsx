// src/components/layout/Footer.jsx
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2025 Система мониторинга. Все права защищены.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              О нас
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Поддержка
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};