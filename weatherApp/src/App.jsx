import Header from "./components/Header";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import HistoricalWeatherCard from "./components/HistoricalWeatherCard";
import FavoriteLocations from "./components/FavoriteLocations";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./AuthContext";
function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/historical" element={<HistoricalWeatherCard />} />
        <Route path="/favorites" element={<FavoriteLocations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
