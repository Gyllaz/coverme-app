import React, { createContext, useContext, useState } from "react";

type WalletState = {
  addedCards: { insurance: boolean; bank: boolean };
  markAdded: (type: "insurance" | "bank") => void;
};

const WalletContext = createContext<WalletState | undefined>(undefined);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [addedCards, setAddedCards] = useState({ insurance: false, bank: false });

  const markAdded = (type: "insurance" | "bank") =>
    setAddedCards(prev => ({ ...prev, [type]: true }));

  return (
    <WalletContext.Provider value={{ addedCards, markAdded }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
};
