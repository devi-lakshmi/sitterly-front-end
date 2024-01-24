import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const { userRole} = useAuth();
  const api = useApi();
  const navigate = useNavigate();
  
  const getUser = () => {
    api.get("/users/profile");
  
  }
  const handleCreateSitterProfile = () => {
    navigate("/createSitterProfile");
  };

  const handleBrowseSitterProfiles = () => {
    navigate("/getSitterProfiles");
  };
 return (
    <div className="App min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        
       <div className="flex space-x-4">
        </div>
       
     
     
         
      <image src ="https://static.vecteezy.com/system/resources/previews/013/271/634/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg" alt ="opp"  className="mb-4" />
     {/* {userRole === "parent" && (
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
     
     )} */}
    <Link
        to="/createSitterProfile"
        className="text-blue-500 underline mr-4 hover:text-blue-700"
      >
        createsitterProfilePage
      </Link>

      {/* Link to Browse Sitter Profiles Component */}
      <Link to="/getSitterProfiles" className="text-blue-500 underline hover:text-blue-700">
        SitterProfilesPage
      </Link>
     <Link to={"/bookings"} className="text-blue-500 underline hover:text-blue-700">BrowseBookings</Link>
   </header>
   </div>
  );
};
export default HomePage;