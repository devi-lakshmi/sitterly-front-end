import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { HomePage, LogInPage, SignUpPage } from "./pages";
import ToRegister from "./pages/ToRegister";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import CreateSitterProfile from "./componets/CreateSitterProfile";
import BrowseSitterProfiles from "./componets/BrowseSitterProfiles";
import CreateBookings from "./componets/CreateBookings";
import BrowseBookings from "./componets/BrowseBookings";
import { useState } from "react";
import WelcomePage from './pages/Welcomepage';
import Header from './pages/Header';
import ReviewSitter from './componets/ReviewSitter';


function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const handleClick = () => {
    setShowRegisterPopup(true);

  };
  const handleClose = () => {
    setShowRegisterPopup(false);

  };

  return (
    <section className="sm:max-lg:bg-blue-50 md:grid-cols-1 md:items-center md:text-left sm:max-xl:p-9 grid gap-8">
      <div className="App min-h-screen flex flex-col">
        <header className="bg-teal-400 text-black p-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold border-spacing-9 ">Sitterly</h1>
          <div className="flex space-between">
            {!user && (
              <div>

                <button className="bg-black-500 text-white px-2 py-2 text-xl rounded-md  hover:bg-purple-600" onClick={handleClick}>To Register</button>
                {showRegisterPopup && (
                  < ToRegister onClose={handleClose} />

                )}
              </div>
            )}

            {user && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                  navigate('/');

                }}
                className="hover:text-purple-500"
              >
                Logout
              </button>
            )}
          </div>
          <Header isAuthenticated={!!user} />
        </header>
        <p className="text-3xl font-bold mb-50 text-black-500">Welcome to Sitterly!</p>
        <ToastContainer />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/toregister" element={<ToRegister />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/createSitterProfile" element={<CreateSitterProfile />} />
            <Route path="/getSitterProfiles" element={<BrowseSitterProfiles />} />
            <Route path="/createBookings/:sitterId" element={<CreateBookings />} />
            <Route path="/bookings" element={<BrowseBookings />} />
            <Route path="/reviews/:bookingId" element={<ReviewSitter />} />
          </Routes>

        </main>

      </div>
    </section>
  );
}

export default App;
