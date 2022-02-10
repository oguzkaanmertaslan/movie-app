const getMovieRequest = async (searchValue, setMovie) => {
  const baseUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=17647937`;

  const response = await fetch(baseUrl);
  const responseJson = await response.json();

  if (responseJson.Search) {
    setMovie(responseJson.Search);
  }
};

export default getMovieRequest;
