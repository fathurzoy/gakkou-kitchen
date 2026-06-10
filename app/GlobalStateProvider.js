'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export const GlobalStateContext = createContext();

export function GlobalStateProvider({ children }) {
  // Read from localStorage if available, otherwise default
  const [showFurigana, setShowFurigana] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);

  // Optional: save to localStorage to remember user's choice across reloads
  useEffect(() => {
    const savedFurigana = localStorage.getItem('gakkou_furigana');
    if (savedFurigana !== null) setShowFurigana(savedFurigana === 'true');
    
    const savedTranslation = localStorage.getItem('gakkou_translation');
    if (savedTranslation !== null) setShowTranslation(savedTranslation === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('gakkou_furigana', showFurigana);
  }, [showFurigana]);

  useEffect(() => {
    localStorage.setItem('gakkou_translation', showTranslation);
  }, [showTranslation]);

  return (
    <GlobalStateContext.Provider value={{ showFurigana, setShowFurigana, showTranslation, setShowTranslation }}>
      <div className={showFurigana ? '' : 'furigana-hidden'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </GlobalStateContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalStateContext);
