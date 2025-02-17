import axios from "axios";
import { useEffect, useState } from "react";

const FavoriteLocations = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:8080/favorites");
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const handleRemoveFavorite = async (city) => {
    try {
      await axios.delete(`http://localhost:8080/favorites/${city}`);
      setFavorites(favorites.filter((fav) => fav.city !== city));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

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
            <button
              onClick={() => handleRemoveFavorite(location.city)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteLocations;
