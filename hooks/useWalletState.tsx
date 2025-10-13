// /hooks/useWalletState.ts
import { useState } from 'react';

export default function useWalletState() {
  const [addedCards, setAddedCards] = useState({
    insurance: false,
    bank: false,
  });

  const markAdded = (type: 'insurance' | 'bank') =>
    setAddedCards(prev => ({ ...prev, [type]: true }));

  return { addedCards, markAdded };
}
