import "./App.css";

import { HomePage, LogInPage, SignUpPage } from "./pages";
import { Link, Route, Routes } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import CreateSitterProfile from "./componets/CreateSitterProfile";
import BrowseSitterProfiles from "./componets/BrowseSitterProfiles";
import CreateBookings from "./componets/CreateBookings";
import BrowseBookings from "./componets/BrowseBookings";

function App() {
  const { user, logout } = useAuth();

  return (
    <div className="App min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sitterly</h1>
        <div className="flex space-x-4">
          {!user && (
            <>
               <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/login" className="hover:text-gray-300">
                Log In
              </Link>
              <Link to="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
              
            </>
          )}
          {user && (
            <button
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
              className="hover:text-gray-300"
            >
              Log Out
            </button>
          )}
        </div>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/createSitterProfile" element={<CreateSitterProfile />} />
          <Route path="/getSitterProfiles" element={<BrowseSitterProfiles />} />
          <Route path="/createBookings" element={<CreateBookings />} />
         <Route path="/bookings" element={<BrowseBookings />} />
        
      </Routes>
      </main>

    </div>
  );
}

export default App;
