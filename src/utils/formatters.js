// src/utils/formatters.js
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  export const formatVolume = (value) => {
    return `${value.toFixed(1)} л`;
  };
  
  export const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(timestamp));
  };
  
  export const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };