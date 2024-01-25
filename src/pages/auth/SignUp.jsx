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

  const { email, password ,role} = form;

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

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
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
           
          </label>
          <div className="flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="sitter"
                checked={role === "sitter"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Sitter</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="parent"
                checked={role === "parent"}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Parent</span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
