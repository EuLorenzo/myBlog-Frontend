import { createContext, type ReactNode } from "react";

interface TokenContextProps {
  token: string | null;
  setTokenValue: (token: string | null) => void;
}

const TokenContext = createContext<TokenContextProps>({} as TokenContextProps);
export default TokenContext;
