import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import getMovieRequest from "./services";
import RemoveFavorites from "./components/RemoveFavorites";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getMovieRequest(searchValue, setMovie);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = localStorage.getItem("favorites");
    if (movieFavorites) {
      setFavorites(JSON.parse(movieFavorites));
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorites", JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    const uniqueFavorites=favorites.filter((item)=>item.imdbID!==movie.imdbID)
    if (uniqueFavorites.length === favorites.length) {
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
    else{
      alert("Movie already exists in favorites")
    }
    
  };

  const removeFavoritesMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4 ">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row" >
        <MovieList
          movies={movie}
          handleFavoritesClick={addFavoriteMovie}
          favouriteComponents={AddFavorites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row" >
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoritesMovie}
          favouriteComponents={RemoveFavorites}
        />
      </div>
    </div>
  );
};

export default App;
