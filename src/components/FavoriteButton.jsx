import { HeartIcon } from "@heroicons/react/16/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { useFavorites } from "../hooks/useFavorites";

const FavoriteButton = ({ product }) => {
  const productId = product?.id;

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(productId);

  return (
    <button
      onClick={() => toggleFavorite(productId)}
      className={`p-2 rounded-full transition duration-300 ease-in-out ${
        isFavorite
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {isFavorite ? (
        <HeartIcon className="size-6" />
      ) : (
        <HeartOutlineIcon className="size-6" />
      )}
    </button>
  );
};

export default FavoriteButton;
