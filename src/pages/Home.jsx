import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const { user } = useAuth();
  const api = useApi();
const navigate = useNavigate();
  const getUser = () => {
    api.get("/users/profile");
  
  }
  const handleCreateSitterProfile = () => {
    // Use the navigate function to redirect to the "/createSitterProfile" route
    navigate("/createSitterProfile");
  };

  const handleBrowseSitterProfiles = () => {
    // Use the navigate function to redirect to the "/getSitterProfiles" route
    navigate("/getSitterProfiles");
  };
return (
    <div className="bg-gray-200 p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sitterly</h1>

      <button
        onClick={handleCreateSitterProfile}
        className="text-blue-500 underline mr-4 hover:text-blue-700"
      >
        Create Sitter Profile
      </button>

      <button
        onClick={handleBrowseSitterProfiles}
        className="text-blue-500 underline hover:text-blue-700"
      >
        Browse Sitter Profiles
      </button>
    </div>
  );
};
export default HomePage;