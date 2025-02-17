import axios from "axios";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import FavoriteLocations from "./FavoriteLocations";

const MainDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/weather/current-weather?city=${city}`
      );
      console.log(response);
      const weatherData = {
        city: response.data.city,
        temperature: response.data.temperature,
        humidity: response.data.humidity,
        windSpeed: response.data.windSpeed,
        description: response.data.description,
      };
      setCurrentWeather(weatherData);
      console.log(weatherData);
    } catch (error) {
      console.error("Error fetching data");
      alert("Failed to fetch weather data.Please try again");
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CurrentWeatherCard weather={currentWeather} />
      <FavoriteLocations />
    </div>
  );
};

export default MainDashboard;
