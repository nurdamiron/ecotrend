export const FIREBASE_CONFIG = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
  };
  
  // Константы для работы с контейнерами
  export const CONTAINER_STATUSES = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    MAINTENANCE: 'maintenance',
    ERROR: 'error'
  };
  
  export const CONTAINER_LIMITS = {
    MIN_TEMPERATURE: 0,
    MAX_TEMPERATURE: 30,
    MIN_PRESSURE: 90,
    MAX_PRESSURE: 110,
    MIN_VOLUME: 0,
    MAX_VOLUME: 1000
  };
  
  export const REFRESH_INTERVAL = 5000; // Интервал обновления данных в мс
  
  // Пути в базе данных
  export const DATABASE_PATHS = {
    CONTAINERS: 'containers',
    USERS: 'users',
    SETTINGS: 'settings'
  };