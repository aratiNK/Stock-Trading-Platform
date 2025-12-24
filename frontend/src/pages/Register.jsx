import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        { name, email, password }
      );

      alert("Account created. Please login.");
      window.location.replace("/login");
    } catch (err) {
      alert(err?.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2 className="text-center mb-4">Register</h2>

      <form onSubmit={submit}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
