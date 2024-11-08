import { useContext } from "react";
import { FavoritesContext } from "../context/FavoriteContext";

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
