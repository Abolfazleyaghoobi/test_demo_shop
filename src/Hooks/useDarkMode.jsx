// src/hooks/useDarkMode.js
import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'theme';
/**
 * useDarkMode - یک هوک ساده برای تغییر تم با Tailwind (darkMode: 'class')
 * - حالت فعلی را بازمی‌گرداند: 'light' یا 'dark'
 * - تابع toggle برای تغییر تم
 * - مقداردهی اولیه از localStorage یا مقدار پیش‌فرض
 */
export default function useDarkMode(defaultMode = 'light') {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return defaultMode;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    // می‌توانید از prefers-color-scheme استفاده کنی:
    // اگر می‌خواهی بر اساس ترجیح کاربر اولیه باشد، uncomment کن:
    // const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // return prefersDark ? 'dark' : 'light';
    return defaultMode;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((m) => (m === 'dark' ? 'light' : 'dark'));
  }, []);

  return { mode, toggle, setMode };
}