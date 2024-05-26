import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { getMovie } from "../../components/Api/apiData";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const notify = (message) => toast.error(`${message}`);
const MoviesPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("searchMovie") ?? "";

  useEffect(() => {
    if (movieName.trim() === "") {
      notify("Please, enter the name of a movie!");
      return;
    }

    const fetchMovie = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await getMovie(movieName);
        if (!data.results.length) {
          setError(true);
          notify(
            "No results available. Please refine your search and try again."
          );
        } else {
          setMoviesList(data.results);
        }
      } catch (error) {
        setError(true);
        notify("Something went wrong. Please, try again!");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieName]);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchForm = event.currentTarget;
    setSearchParams({ searchMovie: searchForm.elements.searchMovie.value });
    searchForm.reset();
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && (
        <p>No results available. Please refine your search and try again.</p>
      )}
      <MovieList movies={moviesList} location={location} />
    </div>
  );
};

export default MoviesPage;
