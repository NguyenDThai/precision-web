import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isEnglish = i18n.resolvedLanguage?.startsWith('en') ?? true;
  const isVietnamese = i18n.resolvedLanguage?.startsWith('vi') ?? false;
  
  const currentLangCode = isVietnamese ? 'VI' : 'EN';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors"
        aria-label="Change Language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium uppercase">{currentLangCode}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg overflow-hidden z-50 transition-colors duration-300">
          <div className="py-1">
            <button
              onClick={() => toggleLanguage('en')}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                isEnglish
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              English (EN)
            </button>
            <button
              onClick={() => toggleLanguage('vi')}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                isVietnamese
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Tiếng Việt (VI)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
