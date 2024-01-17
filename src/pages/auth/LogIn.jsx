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
    <div>
      <h1>Log In</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
