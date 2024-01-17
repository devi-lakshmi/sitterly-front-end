import { useCallback, useContext, useEffect, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const { currentUser, token, removeToken, storeToken, getCurrentUser } =
    useContext(AuthContext);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const logout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [removeToken]);

  const login = useCallback(
    (newToken) => {
      storeToken(newToken);
    },
    [storeToken]
  );

  return { user, token, logout, login, refetchUser: getCurrentUser };
};
