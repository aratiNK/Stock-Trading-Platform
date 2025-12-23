export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href =
      "https://stock-trading-clon.netlify.app/login";
    return null;
  }

  return children;
}
