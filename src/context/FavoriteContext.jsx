import { createContext, useState, useEffect, useCallback } from "react";

const FAVORITES_KEY = "favorites";
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(productId);
      const updatedFavorites = isFavorite
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId];

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
