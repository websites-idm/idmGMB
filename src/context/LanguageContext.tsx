"use client";
import React, { createContext, useContext } from 'react';
import { dictionaries, siteData } from '@/config/dictionary';

interface LanguageContextType {
  t: typeof dictionaries.te;
  site: typeof siteData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const value = {
    t: dictionaries.te,
    site: siteData
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
