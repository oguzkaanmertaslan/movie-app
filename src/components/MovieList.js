import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MovieList = (props) => {
  const FavouriteComponents = props.favouriteComponents;
  return (
    <>
      <Carousel>
        {props?.movies?.map((movie, index) => (
          <Carousel.Item>
            <div
              className="active image-container d-flex justify-content-start m-3 "
              key={movie.imdbID}
            >

              <img src={movie.Poster} alt="movie" />

              <div
                onClick={() => props.handleFavoritesClick(movie)}
                className="overlay d-flex- align-items-center justify-content-center "
              >
                <FavouriteComponents />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default MovieList;
