import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // Mengambil data user dan role dari localStorage
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear(); // Menghapus data pengguna dari localStorage
    navigate("/"); // Mengarahkan ke halaman login setelah logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#212529" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/home">Perpustakaan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/home">Beranda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/listBooks">Daftar Buku</a>
            </li>
            {role === "admin" ? (
              <li className="nav-item">
                <a className="nav-link text-warning" href="/dashboard">Dashboard Admin</a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link text-white" href="/profile">Profile</a>
              </li>
            )}
          </ul>
          <div className="btn-group">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
