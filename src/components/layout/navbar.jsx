// src/components/layout/Navbar.jsx
import React from 'react';
import { Bell, Settings, Menu } from 'lucide-react';

export const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section with menu button and title */}
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold ml-2">Система мониторинга</h1>
          </div>

          {/* Right section with notifications and settings */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};