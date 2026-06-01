import React, { createContext, useState } from 'react';

export const BetContext = createContext();

export function BetProvider({ children }) {
  const [betType, setBetType] = useState(null);

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const [drawNumbers, setDrawNumbers] = useState([]);

  const [ticketNumber, setTicketNumber] = useState(null);

  const [contestAmount, setContestAmount] = useState(1);

  return (
    <BetContext.Provider
      value={{
        betType,
        setBetType,

        selectedNumbers,
        setSelectedNumbers,

        drawNumbers,
        setDrawNumbers,

        ticketNumber,
        setTicketNumber,

        contestAmount,
        setContestAmount,
      }}>
      {children}
    </BetContext.Provider>
  );
}
