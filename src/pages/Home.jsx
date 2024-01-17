import { useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const { user } = useAuth();
  const api = useApi();

  const getUser = () => {
    api.get("/users/profile");
  };

  return (
    <div>
      <h1>Welcome to Sitterly</h1>
      {user && <button onClick={getUser}>Refetch User</button>}
    </div>
  );
};
