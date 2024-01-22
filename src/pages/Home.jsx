import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const { user ,userRole} = useAuth();
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

      {userRole === "parent" && (
        <button
          onClick={handleBrowseSitterProfiles}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Browse Sitter Profiles
        </button>
      )}

      {userRole === "sitter" && (
        <button
          onClick={handleCreateSitterProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Sitter Profile
        </button>
     )}
     <Link to ={"/createBookings" }>createBookings</Link>
   <Link to ={"/bookings" }>BrowseBookings</Link>
   </div>
  );
};
export default HomePage;