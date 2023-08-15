import { useContext } from "react";
import AuthContext from "../contexts/auth";

const useAuth = (): AuthContext => useContext(AuthContext);

export default useAuth;
