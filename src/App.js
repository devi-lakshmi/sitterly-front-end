import "./App.css";

import { HomePage, LogInPage, SignUpPage } from "./pages";
import { Link, Route, Routes } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { user, logout } = useAuth();

  return (
    <div className="App">
      <header>
        <h1>Sitterly</h1>
        {!user && (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        {user && (
          <button
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            Log Out
          </button>
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
