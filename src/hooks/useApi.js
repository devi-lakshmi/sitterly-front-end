import { useEffect, useState } from "react";

import { API } from "../lib/API";
import { useAuth } from "./useAuth";

export const useApi = () => {
  const { token } = useAuth();
  const [api, setApi] = useState(new API());

  useEffect(() => {
    if (token) {
      setApi(
        new API({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      );
    } else {
      setApi(new API());
    }
  }, [token]);

  return api;
};
