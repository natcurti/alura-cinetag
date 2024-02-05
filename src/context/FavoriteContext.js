import { createContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favoritos";

const FavoriteContextProvider = ({children}) => {
    const [favorite, setFavorite] = useState([]);
    return (
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;