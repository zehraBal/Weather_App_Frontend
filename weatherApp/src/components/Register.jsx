import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/weather/register", {
        username,
        password,
      });

      setSuccess("Başarıyla kayıt olundu! Şimdi giriş yapabilirsiniz.");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError("Kayıt işlemi başarısız! Kullanıcı adı alınmış olabilir.");
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-center">Kayıt Ol</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

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
      <input
        className="border p-2 w-full my-2"
        type="password"
        placeholder="Şifreyi Tekrar Girin"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
        onClick={handleRegister}
      >
        Kayıt Ol
      </button>
    </div>
  );
};

export default Register;
