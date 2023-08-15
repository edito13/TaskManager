import { createContext } from "react";

const AuthContext = createContext<AuthContext>({
  isAuthenticated: false,
  SetIsAuthenticated: () => {},
});

export default AuthContext;
