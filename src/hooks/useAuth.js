import { useCallback, useContext, useEffect, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const { currentUser, token, userRole,removeToken, storeToken, getCurrentUser } =
    useContext(AuthContext);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const logout = useCallback(() => {
    removeToken();
    localStorage.removeItem("userRole"); 
    setUser(null);
  }, [removeToken]);

  const login = useCallback(
    (newToken,role) => {
      storeToken(newToken);
    localStorage.setItem("userRole", role);
    },
    [storeToken]
  );

  return { user, token,userRole, logout, login, refetchUser: getCurrentUser };
};
