// src/components/layout/Sidebar.jsx
import React from 'react';
import { Navigation } from './navigation';
import { X } from 'lucide-react';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white border-r transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full pt-16">
          {/* Close button - mobile only */}
          <div className="md:hidden absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <Navigation />
          </div>

          {/* User profile section */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                А
              </div>
              <div>
                <div className="font-medium">Администратор</div>
                <div className="text-sm text-gray-500">admin@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};