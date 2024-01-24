import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import { HomePage, LogInPage, SignUpPage} from "./pages";
import ToRegister from "./pages/ToRegister";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import CreateSitterProfile from "./componets/CreateSitterProfile";
import BrowseSitterProfiles from "./componets/BrowseSitterProfiles";
import CreateBookings from "./componets/CreateBookings";
import BrowseBookings from "./componets/BrowseBookings";
import { useState } from "react";

function App() {
  const { user, logout } = useAuth();
    const navigate = useNavigate();

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

    const handleClick = () => {
    setShowRegisterPopup(true);
   navigate("/signup");
    };
  // const handleClick = () => {
  //   navigate("/login");
  //   navigate("/signup");
  // };
  
  return (
    <div className="App min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sitterly</h1>
        <div className="flex space-x-4">
          {!user && (
          <div>
              
              <button onClick={handleClick}>To Register</button>
              {showRegisterPopup && (
                < ToRegister onClose={() => setShowRegisterPopup(false)} />
          )}
                </div>
          )}
          
        {user && (
            <button
              onClick={(e) => {
                e.preventDefault();
                logout();
                navigate('/login');
              }}
              className="hover:text-gray-300"
            >
              Log Out
            </button>
          )}
        </div>
      </header>
<p className="text-2xl font-bold mb-50 text-blue-500">Welcome to Sitterly!</p>
       <ToastContainer />
      <main className="flex-grow">
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/createSitterProfile" element={<CreateSitterProfile />} />
          <Route path="/getSitterProfiles" element={<BrowseSitterProfiles />} />
          <Route path="/createBookings/:sitterId" element={<CreateBookings />} />
         <Route path="/bookings" element={<BrowseBookings />} />
         
      </Routes>
      
      </main>

    </div>
  );
}

export default App;
