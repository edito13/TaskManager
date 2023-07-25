import { createContext, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  SetIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  SetIsAuthenticated: () => {},
});

export const useAuth = (): AuthContextType => useContext(AuthContext);

export default AuthContext;
