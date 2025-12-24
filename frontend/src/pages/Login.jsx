import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const backendURL =
        window.location.hostname === "localhost"
          ? "http://localhost:3002"
          : "https://stock-trading-platform-2-q9qo.onrender.com";

      const res = await axios.post(
        `${backendURL}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      const dashboardURL =
        window.location.hostname === "localhost"
          ? "http://localhost:3001"
          : "https://stock-trading-dashboard.netlify.app";

      window.location.href = dashboardURL;
    } catch (err) {
      alert(err?.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2 className="text-center">Login</h2>

      <form onSubmit={submit}>
        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
