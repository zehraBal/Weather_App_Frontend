const CurrentWeatherCard = (weather) => {
  if (!weather) {
    return (
      <div className="text-center mt-8 text-gray-600">
        No weather data available. Please search for a city.
      </div>
    );
  }

  return (
    <div className="container mt-8 px-4">
      <div className="mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          {weather.city}
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <div>
            {weather.icon ? (
              <img
                src={weather.icon}
                alt="Weather Icon"
                className="w-16 h-16"
              />
            ) : (
              <span className="text-6xl">🌤</span>
            )}
          </div>

          <div className="text-gray-700">
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
        </div>
      </div>
    </div>
  );
};
export default CurrentWeatherCard;
