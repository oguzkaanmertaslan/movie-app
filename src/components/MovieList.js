import React from "react";

const MovieList = (props) => {
  const FavouriteComponents = props.favouriteComponents;
  return (
    <>
      {props?.movies?.map((movie, index) => (
        
        
          <div className="active image-container d-flex justify-content-start m-3"   key={movie.imdbID} >
          <img src={movie.Poster} alt="movie" />
          <div
          
            onClick={() => props.handleFavoritesClick(movie)}
            className="overlay d-flex- align-items-center justify-content-center"
          >
            <FavouriteComponents />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;