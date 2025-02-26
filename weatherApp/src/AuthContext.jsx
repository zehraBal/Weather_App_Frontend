import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      fetchUser(token); // Token'ı doğrudan parametre olarak gönderiyoruz
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [token]); // Sadece token değiştiğinde çalışır

  const fetchUser = async (jwtToken) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/weather/user/info",
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      );
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching user info:", error);
      logout(); // Token geçersizse çıkış yap
    }
  };

  const login = (jwtToken) => {
    setToken(jwtToken); // Token'ı state'e atıyoruz
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
