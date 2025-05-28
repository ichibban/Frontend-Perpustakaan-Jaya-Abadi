import axios from "axios";

const API_BASE = "http://localhost:8080/api";

/**
 * Kirim email & password ke backend untuk login.
 * @param {string} email
 * @param {string} password
 * @returns {Promise} 
 */
export async function loginUser(email, password) {
  return axios.post(`${API_BASE}/auth/login`, {
    email,
    password,
  });
}

export async function registerUser({ email, password, nama_depan, nama_belakang, tanggal_lahir }) {
  return axios.post(`${API_BASE}/auth/register`, {
    email,
    password,
    nama_depan,
    nama_belakang,
    tanggal_lahir,
  });
}

