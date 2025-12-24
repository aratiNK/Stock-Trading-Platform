export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // 🚨 STOP all redirects to frontend
  if (!token) {
    return <h2 style={{ textAlign: "center" }}>Please login again</h2>;
  }

  return children;
}
