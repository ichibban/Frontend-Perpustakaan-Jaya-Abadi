import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "admin") {
    // Jika tidak login atau bukan admin, tolak
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
