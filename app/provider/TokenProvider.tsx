import { useState, type ReactNode } from "react";
import TokenContext from "~/context/TokenContext";

interface props {
  children: ReactNode;
}
export const TokenProvider = ({ children }: props) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setTokenValue = (token: string | null) => {
    setToken(token);
  };

  const setUserIdValue = (userId: number | null) => {
    setUserId(userId);
  };

  return (
    <TokenContext.Provider
      value={{ token, setTokenValue, userId, setUserIdValue }}
    >
      {children}
    </TokenContext.Provider>
  );
};
