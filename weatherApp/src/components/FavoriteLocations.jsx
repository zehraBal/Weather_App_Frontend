const FavoriteLocations = ({ favorites }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <div className="container mx-auto mt-8 text-center text-gray-600">
        No favorite locations added yet.
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Favorite Locations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((location, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {location.city}
            </h3>

            <p className="text-lg text-blue-500 mb-1">
              {location.temperature}°C
            </p>

            <p className="text-gray-600 capitalize">{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteLocations;
