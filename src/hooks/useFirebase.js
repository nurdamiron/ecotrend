// src/hooks/useFirebase.js
import { useCallback } from 'react';
import { ref, set, update, remove, get } from 'firebase/database';
import { db } from '../config/firebase';
import { DATABASE_PATHS } from '../config/constants';

export const useFirebase = () => {
  // Создание новой записи
  const createRecord = useCallback(async (path, data) => {
    try {
      const reference = ref(db, path);
      await set(reference, data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Обновление существующей записи
  const updateRecord = useCallback(async (path, updates) => {
    try {
      const reference = ref(db, path);
      await update(reference, updates);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Удаление записи
  const deleteRecord = useCallback(async (path) => {
    try {
      const reference = ref(db, path);
      await remove(reference);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Получение данных один раз
  const fetchRecord = useCallback(async (path) => {
    try {
      const reference = ref(db, path);
      const snapshot = await get(reference);
      return { success: true, data: snapshot.val() };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  return {
    createRecord,
    updateRecord,
    deleteRecord,
    fetchRecord
  };
};

