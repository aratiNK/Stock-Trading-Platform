export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    const loginURL =
      window.location.hostname === "localhost"
        ? "http://localhost:3000/login"
        : "https://stock-trading-clon.netlify.app/login";

    window.location.replace(loginURL);
    return null;
  }

  return children;
}
