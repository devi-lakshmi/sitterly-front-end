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
  });

  const { email, password } = form;

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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
