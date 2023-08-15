import { useContext } from "react";
import AuthContext from "../contexts/auth";

const useAuth = (): AuthContextI => useContext(AuthContext);

export default useAuth;
