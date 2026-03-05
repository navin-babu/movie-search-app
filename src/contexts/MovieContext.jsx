import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFav = localStorage.getItem("favorites")

        if (storedFav) setFavorites(JSON.parse(storedFav))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites((prevMovie) => [...prevMovie, movie])
    }

    const removeFavorites = (movieId) => {
        setFavorites((prevMovie) => prevMovie.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}