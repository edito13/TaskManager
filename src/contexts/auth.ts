import { createContext } from "react";

const AuthContext = createContext<AuthContextI>({
  isAuthenticated: false,
  SetIsAuthenticated: () => {},
});

export default AuthContext;
