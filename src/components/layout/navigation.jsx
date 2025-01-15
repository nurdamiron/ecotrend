// src/components/layout/Navigation.jsx
import React from 'react';
import { Home, PieChart, Bell, Settings, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Главная', path: '/' },
    { icon: PieChart, label: 'Статистика', path: '/stats' },
    { icon: Bell, label: 'Уведомления', path: '/notifications' },
    { icon: Settings, label: 'Настройки', path: '/settings' },
    { icon: Info, label: 'О системе', path: '/about' },
  ];

  return (
    <nav className="flex flex-col space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`
              flex items-center px-3 py-2 rounded-lg text-sm
              ${isActive 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};