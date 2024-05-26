import axios from "axios";

// const API_KEY = "7e0e0feb27bb3c619f1ac09045ac2dbc";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const TOKEN_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBlMGZlYjI3YmIzYzYxOWYxYWMwOTA0NWFjMmRiYyIsInN1YiI6IjY2NGUzNWVmNWQxODljZTRmMWNhYjUzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JbQXS_o55M-Z-Csmlm8mHScNUEsaROkuv8bn-btaAJ8";

//trending movies
export const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day?language=en-US", {
    headers: {
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });
  return response.data;
};

//search movie
export const getMovie = async (searchQuery) => {
  const response = await axios.get(
    "search/movie?include_adult=false&language=en-US&page=1",
    {
      params: {
        query: searchQuery,
      },
      headers: {
        Authorization: `Bearer ${TOKEN_KEY}`,
      },
    }
  );
  return response.data;
};

//movie details

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });
  return response.data;
};

//movie cast

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });
  return response.data;
};
