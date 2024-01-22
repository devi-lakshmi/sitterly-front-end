import { createContext, useCallback, useEffect, useState } from "react";

import { API } from "../lib/API";

const AUTH_TOKEN_STORAGE_KEY = "sitterly_token";

export const AuthContext = createContext({
  token: null,
  currentUser: null,
  userRole: null,
  storeToken: (_token) => {},
  removeToken: () => {},
  getCurrentUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) || null
);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null); 
  
  const removeToken = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    setToken(null);
    setUserRole(null);
  }, []);

  const getCurrentUser = useCallback(() => {
    if (!token) {
      setCurrentUser(null);
      setUserRole(null);
      return;
    }

    console.log("Getting current user");
    const api = new API({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    api
      .get("/users/profile")
      .then((response) => {
        console.log(response.data);
        setCurrentUser(response.data);
        setUserRole(response.data.role);
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
        console.warn("Token invalid, logging out");
         setUserRole(null);
      });
  }, [token]);

  const storeToken = useCallback(
    (newToken) => {
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, newToken);
      setToken(newToken);
     getCurrentUser().then(() => {
      // Now that getCurrentUser has completed, userRole should be updated
      // Store the userRole in localStorage
      localStorage.setItem("role", userRole);
    });
    },
    [getCurrentUser,userRole]
  );

  useEffect(() => {
    getCurrentUser();
  }, [token, getCurrentUser]);

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        userRole,
        storeToken,
        removeToken,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
