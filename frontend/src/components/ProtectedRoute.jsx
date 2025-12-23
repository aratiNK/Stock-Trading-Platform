export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // redirect to frontend login (external app)
    window.location.href = "http://localhost:5173/login";
    return null;
  }

  return children;
}
