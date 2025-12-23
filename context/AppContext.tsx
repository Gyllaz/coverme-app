import React, { createContext, useContext, useState } from 'react';


type AppContextType = {
  isCard: boolean;
  setIsCard: (value: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCard, setIsCard] = useState(false);

  return (
    <AppContext.Provider value={{ isCard, setIsCard }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};