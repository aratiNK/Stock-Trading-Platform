// dashboard/src/components/ProtectedRoute.jsx
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect back to frontend login page (port 3000)
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
}
