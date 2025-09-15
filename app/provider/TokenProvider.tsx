import { useState, type ReactNode } from "react";
import TokenContext from "~/context/TokenContext";

interface props {
  children: ReactNode;
}
export const TokenProvider = ({ children }: props) => {
  const [token, setToken] = useState<string | null>(null);

  const setTokenValue = (token: string | null) => {
    setToken(token);
  };

  return (
    <TokenContext.Provider value={{ token, setTokenValue }}>
      {children}
    </TokenContext.Provider>
  );
};
