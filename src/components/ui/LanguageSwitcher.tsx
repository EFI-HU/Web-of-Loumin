'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/lib/i18n';
import { locales, type Locale } from '@/lib/i18n';

const languageNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  fr: 'Français'
};

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);

  // 客户端渲染保护
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative">
        <button className="px-3 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800">
          Loading...
        </button>
      </div>
    );
  }

  const handleLanguageChange = async (locale: Locale) => {
    await setUserLocale(locale);
    setIsOpen(false);
    // 强制刷新页面以应用新语言
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {languageNames[currentLocale]}
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-20">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  locale === currentLocale ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                {languageNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 