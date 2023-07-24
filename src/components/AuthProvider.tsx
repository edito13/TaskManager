import React, { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import AuthContext from "../contexts/auth";

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.token);

  const SetIsAuthenticated = useCallback(
    (value: boolean) => setIsAuthenticated(value),
    []
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, SetIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
