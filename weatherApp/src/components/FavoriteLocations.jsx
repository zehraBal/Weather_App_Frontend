import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";

const FavoriteLocations = ({ onSelectCity }) => {
  const { token, isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (token) {
      fetchFavorites();
    }
  }, [token]);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/weather/favorites",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  // Favori konumu sil
  const handleRemoveFavorite = async (city) => {
    try {
      await axios.delete(`http://localhost:8080/favorites/${city}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.city !== city)
      );
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  // Kullanıcı giriş yapmamışsa uyarı göster
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto mt-8 text-center text-red-500">
        Favori lokasyonları görmek için giriş yapmalısınız!
      </div>
    );
  }

  // Eğer favori lokasyon yoksa mesaj göster
  if (!favorites.length) {
    return (
      <div className="container mx-auto mt-8 text-center text-gray-600">
        Henüz favori lokasyon eklenmedi.
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Favori Lokasyonlar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((location, index) => (
          <div
            key={index}
            onClick={() => onSelectCity(location.city)}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow transform hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {location.city}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFavorite(location.city);
              }}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteLocations;
