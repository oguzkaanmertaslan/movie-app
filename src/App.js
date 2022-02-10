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

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };
  const removeFavoritesMovie = (movie) => {
    const newFavoriteList = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movie}
          handleFavoritesClick={addFavoriteMovie}
          favouriteComponents={AddFavorites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
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
