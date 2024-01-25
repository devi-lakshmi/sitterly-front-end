import { useEffect, useState } from "react";

import { useApi } from "../../hooks/useApi";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const LogInPage = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { user, login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    api
      .post("/users/login", form)
      .then((res) => {
        console.log(res);
        const token = res.data.access_token;
        login(token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Username or password is incorrect.");
      });
  };

  useEffect(() => {
    if (user) {
      console.log("User is logged in. Redirecting to home page...");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Log In</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
    </div>
  );
};