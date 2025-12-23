import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/api/auth/login", {
        email,
        password,
      });

      console.log("LOGIN SUCCESS", res.data);
      alert("Login success! Redirecting...");

      // Save token in login app (optional)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Pass token + user to dashboard app via URL
      const dashUrl = `http://localhost:3001/?token=${encodeURIComponent(
        res.data.token
      )}&user=${encodeURIComponent(JSON.stringify(res.data.user))}`;

      window.location.href = dashUrl;
    } catch (err) {
      console.error("LOGIN ERROR:", err?.response?.data || err);
      alert(err?.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2 className="mb-4 text-center">Login to Trading Platform</h2>

      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Enter email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
