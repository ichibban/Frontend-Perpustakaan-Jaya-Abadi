import React from "react";
import "./Dashboard.css";

const books = [
  {
    id: 1,
    title: "Hujan",
    author: "Tere Liye",
    type: "Novel",
    format: "fisik",
    publishDate: "2016-12-04",
    shelf: "Non-Fiksi",
    status: "Tersedia",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    type: "Edukasi",
    format: "fisik",
    publishDate: "2018-12-08",
    shelf: "Fiksi",
    status: "Tidak Tersedia",
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    type: "Novel",
    format: "fisik",
    publishDate: "1965-07-02",
    shelf: "Non-Fiksi",
    status: "Tidak Tersedia",
  },
  {
    id: 4,
    title: "A Song of Ice and Fire",
    author: "George R. R. Martin",
    type: "Fantasi",
    format: "fisik",
    publishDate: "1996-08-01",
    shelf: "Fiksi",
    status: "Tersedia",
  },
];

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-header">
        <div className="book-icon">📚</div>
        <h3>{book.title}</h3>
      </div>
      <p>Penulis: {book.author}</p>
      <p>Jenis: {book.type}</p>
      <p>Tipe: {book.format}</p>
      <p>Terbit: {book.publishDate}</p>
      <p>Rak: {book.shelf}</p>
      <p
        className={
          book.status === "Tersedia" ? "status available" : "status unavailable"
        }
      >
        Status: {book.status}
      </p>
      <div className="button-container">
        {book.status === "Tersedia" ? (
          <button className="btn btn-booking">Booking</button>
        ) : (
          <button className="btn btn-disabled" disabled>
            Tidak Tersedia
          </button>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <a href="#" className="logo">
          Perpustakaan Jaya Abadi
        </a>
        <nav className="nav-menu">
          <a href="#">Beranda</a>
          <a href="#">Peminjaman</a>
          <a href="#">Profil</a>
        </nav>
        <div className="header-right">
          <div className="search-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#888"
              viewBox="0 0 16 16"
              className="search-icon"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.397h-.001l3.85 3.85a1 1 0 0 0 1.414-1.414l-3.85-3.85zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
            </svg>
            <input
              type="text"
              placeholder="Cari buku..."
              className="search-input"
            />
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="welcome-container">
          <h1 className="welcome-text">
            Selamat datang di{" "}
            <span className="highlight">Perpustakaan Jaya Abadi !</span>
          </h1>
          <h1 className="daftar-buku-text">Daftar Buku</h1>
        </div>

        <div className="book-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
