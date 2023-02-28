import {
  createContext,
  useState,
  ReactNode,
  FC,
  PropsWithChildren,
} from "react";

interface TokenContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const TokenContext = createContext<TokenContextType>({
  token: null,
  setToken: () => {},
});

export const TokenProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
