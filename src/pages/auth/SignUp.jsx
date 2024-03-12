import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUpPage = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "sitter",
  });

  const { email, password } = form;

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
const handleCreateSignup = () => {
    navigate("/signup");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    // navigate("/login");
    api
      .post("/users", form)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      
        setError(
          err.response?.data?.detail?.[0].msg ||
            "Something went wrong, please try again."
        );
      });
  };

  return (
    <div className= "max-w-md mx-auto mt-8 p-4 bg-stone-900 rounded shadow-md">
     
      <h1 className="text-2xl font-semibold text-white mb-4">Sign Up</h1>
      
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
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
          type="submit" onClick={handleCreateSignup}
          className="bg-blue-500 text-white px-4 py-2 w-full text-lg rounded hover:bg-purple-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
