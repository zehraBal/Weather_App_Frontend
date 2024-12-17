import axios from "axios";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import FavoriteLocations from "./FavoriteLocations";

const MainDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [favorites, setFavorites] = useState([
    { city: "London", temperature: 15, description: "Cloudy" },
    { city: "New York", temperature: 22, description: "Sunny" },
    { city: "Tokyo", temperature: 18, description: "Rainy" },
  ]);
  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/weather/current-weather?city=${city}`
      );
      const weatherData = {
        city: response.data.city,
        temperature: response.data.temperature,
        description: response.data.description,
      };
      setCurrentWeather(weatherData);
    } catch (error) {
      console.error("Error fetching data");
      alert("Failed to fetch weather data.Please try again");
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <CurrentWeatherCard weather={currentWeather} />
      <FavoriteLocations favorites={favorites} />
    </div>
  );
};

export default MainDashboard;
