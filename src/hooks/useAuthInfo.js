import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuthInfo = () => {
  return useContext(AuthContext);
};

export default useAuthInfo;
