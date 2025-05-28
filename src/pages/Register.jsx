import { useState } from "react";
import { registerUser } from "../api/auth";
import { Spinner } from "react-bootstrap"; // Import Spinner
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    konfirmasiPassword: "",
    nama_depan: "",
    nama_belakang: "",
    tanggal_lahir: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // State untuk memeriksa apakah password dan konfirmasi password cocok

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Validasi password dan konfirmasi password
    if (e.target.name === "konfirmasiPassword") {
      setPasswordMatch(form.password === e.target.value); // Cek apakah password dan konfirmasi password cocok
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      alert("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        await registerUser(form);
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "/";
      } catch (err) {
        alert("Gagal daftar: " + (err.response?.data?.message || err.message));
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Delay 1 detik
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-primary">
      <div className="text-center text-white mb-4">
        <h2>Daftar</h2>
        <p>Daftarkan akun Anda untuk memulai perjalanan!</p>
      </div>

      <div className="login-content p-5 rounded shadow-lg bg-white" style={{ maxWidth: "400px", width: "100%" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nama_depan" className="form-label">Nama Depan</label>
            <input
              name="nama_depan"
              className="form-control"
              placeholder="Nama Depan"
              value={form.nama_depan}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nama_belakang" className="form-label">Nama Belakang</label>
            <input
              name="nama_belakang"
              className="form-control"
              placeholder="Nama Belakang"
              value={form.nama_belakang}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tanggal_lahir" className="form-label">Tanggal Lahir</label>
            <input
              name="tanggal_lahir"
              type="date"
              className="form-control"
              value={form.tanggal_lahir}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="konfirmasiPassword" className="form-label">Konfirmasi Password</label>
            <input
              name="konfirmasiPassword"
              type="password"
              className="form-control"
              placeholder="Konfirmasi Password"
              value={form.konfirmasiPassword}
              onChange={handleChange}
              required
            />
            {!passwordMatch && (
              <div className="text-danger mt-2">Password dan Konfirmasi Password tidak cocok.</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {isLoading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Daftar"
            )}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted">Sudah punya akun? <a href="/" className="text-primary fw-bold">Masuk di sini!</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
