import axios from "axios";

// const API_KEY = "7e0e0feb27bb3c619f1ac09045ac2dbc";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const TOKEN_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBlMGZlYjI3YmIzYzYxOWYxYWMwOTA0NWFjMmRiYyIsInN1YiI6IjY2NGUzNWVmNWQxODljZTRmMWNhYjUzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JbQXS_o55M-Z-Csmlm8mHScNUEsaROkuv8bn-btaAJ8";

//trending movie
const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day?language=en-US", {
    headers: {
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });
  return response.data;
};

export default getTrendingMovies;
