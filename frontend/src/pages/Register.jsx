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
        {
          name,
          email,
          password,
        }
      );

      alert("Account created! Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert(err?.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div
      className="register-container"
      style={{ maxWidth: "400px", margin: "50px auto" }}
    >
      <h2 className="mb-4 text-center">Create Your Account</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          className="form-control mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
      </form>

      <p className="text-center mt-3">
        Already have an account?{" "}
        <a href="/login" className="text-primary">
          Login here
        </a>
      </p>
    </div>
  );
}
