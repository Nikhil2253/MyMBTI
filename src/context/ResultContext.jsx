import { createContext, useState } from "react";
export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [scores, setScores] = useState({ E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 });
  return (
    <ResultContext.Provider value={{ scores, setScores }}>
      {children}
    </ResultContext.Provider>
  );
};
