import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap"; // Import Spinner
import Navbar from "../components/Navbar"; // Import Navbar component
import "bootstrap/dist/css/bootstrap.min.css";

function UserDashboard() {
  const [books, setBooks] = useState([]);  // Buku yang ditampilkan
  const [searchQuery, setSearchQuery] = useState("");  // Untuk pencarian buku
  const [isLoading, setIsLoading] = useState(false);  // Untuk loading
  const navigate = useNavigate();  // Untuk navigasi halaman

  useEffect(() => {
    // Simulasikan fetching buku
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      // Simulasikan pemanggilan API untuk mendapatkan data buku
      const fetchedBooks = [
        { id: 1, name: "Book A", author: "Author A", type: "Fiction", status: "available" },
        { id: 2, name: "Book B", author: "Author B", type: "Non-Fiction", status: "unavailable" },
        { id: 3, name: "Book C", author: "Author C", type: "Science", status: "available" },
        // Tambahkan data buku lain sesuai kebutuhan
      ];
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");  // Navigasi ke halaman login
  };

  // Filter buku berdasarkan pencarian
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-dark text-white text-center py-5">
        <h1>PERPUSTAKAAN JAYA ABADI</h1>
        <p>Selamat datang di Perpustakaan Jaya Abadi!</p>
      </header>

      {/* Search Bar */}
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cari buku berdasarkan nama, penulis, atau jenis"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchBooks}>Cari</button>
          </div>
        </div>
      </div>

      {/* Buku Cards */}
      <div className="row">
        {isLoading ? (
          <div className="d-flex justify-content-center w-100">
            <Spinner animation="border" />
          </div>
        ) : filteredBooks.length === 0 ? (
          <div className="col-12 text-center">
            <p>Tidak ada buku yang ditemukan.</p>
          </div>
        ) : (
          filteredBooks.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card mb-4">
                <img src={`https://via.placeholder.com/150`} className="card-img-top" alt={book.name} />
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Penulis: {book.author}</h6>
                  <p className="card-text">Jenis: {book.type}</p>
                  <p className={`card-text text-${book.status === 'available' ? 'success' : 'danger'}`}>
                    Status: {book.status === 'available' ? 'Tersedia' : 'Tidak Tersedia'}
                  </p>
                  <button className="btn btn-primary" disabled={book.status === 'unavailable'}>
                    {book.status === 'available' ? 'Booking' : 'Tidak Tersedia'}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
