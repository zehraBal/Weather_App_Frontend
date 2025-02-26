import axios from "axios";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import FavoriteLocations from "./FavoriteLocations";
import { useAuth } from "../AuthContext";

const MainDashboard = () => {
  const { token } = useAuth();
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleSearch = async (city) => {
    try {
      const response = token
        ? await axios.get(
            `http://localhost:8080/weather/current?city=${city}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
        : await axios.get(`http://localhost:8080/weather/current?city=${city}`);

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
      <FavoriteLocations onSelectCity={handleSearch} />
    </div>
  );
};

export default MainDashboard;
