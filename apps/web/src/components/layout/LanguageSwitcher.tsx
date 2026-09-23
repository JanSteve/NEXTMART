'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import useLanguageStore from '@/store/language';
import type { Language } from '@/lib/translations';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Array<{ code: Language; label: string; native: string }> = [
    { code: 'en', label: 'English', native: 'English (EN)' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી (GU)' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी (HI)' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:border-primary-400 hover:bg-neutral-50"
        aria-label="Change Language"
      >
        <Globe className="h-4 w-4 text-primary-600" />
        <span>{currentLang.code.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3 text-neutral-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1.5 w-48 rounded-xl border border-neutral-100 bg-white p-1.5 shadow-dropdown animate-fade-in">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-100 mb-1">
            Choose Language
          </div>
          {languages.map((l) => {
            const isSelected = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-primary-50 font-bold text-primary-700'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <span>{l.native}</span>
                {isSelected && <Check className="h-3.5 w-3.5 text-primary-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
