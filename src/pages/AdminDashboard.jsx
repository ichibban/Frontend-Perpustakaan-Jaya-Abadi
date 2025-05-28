import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      // Jika tidak login atau bukan admin, arahkan ke login
      navigate("/");
    } else {
      setEmail(email || "admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const goToUserDashboard = () => {
    navigate("/user");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Halo Admin 👑</h2>
      <p>Selamat datang, {email}.</p>
      <p>Anda berada di halaman dashboard khusus admin.</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={goToUserDashboard} style={{ marginLeft: 10 }}>
        Ke User Dashboard
      </button>
    </div>
  );
}

export default AdminDashboard;