import { FavoriteContext } from "context/FavoriteContext";
import { useContext } from "react";

export const useFavoriteContext = () => {
    const { favorite, setFavorite } = useContext(FavoriteContext);

    const handleFavorite = (newFavorite) => {
        const isFavorite = favorite.some(item => item.id === newFavorite.id); 

        if (!isFavorite) {
            return setFavorite([...favorite, newFavorite]);
        }

        const newList = favorite.filter(item => item.id !== newFavorite.id);
        return setFavorite(newList);
    }

    return {
        favorite, handleFavorite
    }

}