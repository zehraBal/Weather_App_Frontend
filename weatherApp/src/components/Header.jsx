import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Header = () => {
  const { token, logout } = useAuth();

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Weather Dashboard
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                to="/historical"
                className="hover:text-yellow-300 transition"
              >
                Geçmiş Hava Durumu
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="hover:text-yellow-300 transition"
              >
                Favorilerim
              </Link>
            </li>
          </ul>
        </nav>

        {/* Kullanıcı Girişi & Logout */}
        <div>
          {token ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Çıkış Yap
            </button>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Giriş Yap
              </Link>
              <Link
                to="/register"
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Kayıt Ol
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
