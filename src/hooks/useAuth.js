// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { app } from '../config/firebase';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);

    // Подписываемся на изменения состояния аутентификации
    const unsubscribe = onAuthStateChanged(auth, 
      (user) => {
        if (user) {
          setUser(user);
        } else {
          // Если пользователь не аутентифицирован, выполняем анонимный вход
          signInAnonymously(auth)
            .catch((error) => {
              setError(error.message);
            });
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    // Отписываемся при размонтировании
    return () => unsubscribe();
  }, []);

  return { user, loading, error };
};