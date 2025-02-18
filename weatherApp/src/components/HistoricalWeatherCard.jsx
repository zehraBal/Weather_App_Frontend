import axios from "axios";
import { useEffect, useState } from "react";

const HistoricalWeatherCard = () => {
  const [city, setCity] = useState(""); // Arama yapılacak şehir
  const [weatherHistory, setWeatherHistory] = useState([]); // Geçmiş hava durumu
  const [loading, setLoading] = useState(false);

  // Sayfa ilk açıldığında tüm geçmiş hava durumu verisini getir
  useEffect(() => {
    fetchAllHistoricalWeather();
  }, []);

  // Tüm geçmiş hava durumu verisini getir
  const fetchAllHistoricalWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/weather/historical/all"
      );
      setWeatherHistory(response.data);
    } catch (error) {
      console.error("Error fetching all historical weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Şehre göre geçmiş hava durumu getir
  const fetchHistoricalWeatherByCity = async () => {
    if (!city) {
      fetchAllHistoricalWeather(); // Şehir boşsa tekrar tüm veriyi getir
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/weather/historical/searchFor`,
        { params: { city } }
      );
      setWeatherHistory(response.data);
    } catch (error) {
      console.error("Error fetching historical weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Historical Weather Data
      </h2>

      {/* Şehir Arama Kutusu */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-md p-2 w-64"
        />
        <button
          onClick={fetchHistoricalWeatherByCity}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Yükleniyor durumu */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}

      {/* Eğer veri yoksa */}
      {!loading && weatherHistory.length === 0 && (
        <p className="text-center text-gray-600">
          No historical weather data found.
        </p>
      )}

      {/* Geçmiş hava durumu listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherHistory.map((weather, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {weather.city} - {weather.date}
            </h3>
            <p className="text-lg">
              <strong>Temperature:</strong> {weather.temperature}°C
            </p>
            <p className="text-lg">
              <strong>Humidity:</strong> {weather.humidity}%
            </p>
            <p className="text-lg">
              <strong>Wind Speed:</strong> {weather.windSpeed} m/s
            </p>
            <p className="text-lg capitalize">
              <strong>Condition:</strong> {weather.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalWeatherCard;
