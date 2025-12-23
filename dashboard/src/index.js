// dashboard/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

// 🔐 Add this function (IMPORTANT)
function bootstrapAuthFromUrl() {
  const params = new URLSearchParams(window.location.search);

  const token = params.get("token");
  const user = params.get("user");

  if (token) {
    localStorage.setItem("token", token);
  }
  if (user) {
    localStorage.setItem("user", user);
  }

  // Clean the URL after saving token
  if (token || user) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

// 👉 Run this BEFORE rendering the dashboard app
bootstrapAuthFromUrl();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
