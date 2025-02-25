import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      login(response.data.token);
      alert("Başarıyla giriş yapıldı!");
    } catch (error) {
      alert("Giriş başarısız!");
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-center">Giriş Yap</h2>
      <input
        className="border p-2 w-full my-2"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 w-full my-2"
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        onClick={handleLogin}
      >
        Giriş Yap
      </button>
    </div>
  );
};

export default Login;
