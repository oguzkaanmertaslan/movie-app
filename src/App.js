import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import getMovieRequest from "./services";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getMovieRequest(searchValue, setMovie);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movie} />
      </div>
    </div>
  );
};

export default App;
