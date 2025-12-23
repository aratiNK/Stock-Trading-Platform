import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );

      // ✅ save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login success! Redirecting to dashboard...");

      const isLocal = window.location.hostname === "localhost";

      if (isLocal) {
        // 🔹 LOCAL: pass token via URL (required)
        window.location.href = `http://localhost:3001/?token=${res.data.token}`;
      } else {
        // 🔹 PRODUCTION: Netlify dashboard
        window.location.href =
          "https://stock-trading-dashboard.netlify.app/";
      }
    } catch (err) {
      alert(err?.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2 className="mb-4 text-center">Login to Trading Platform</h2>

      <form onSubmit={submit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
