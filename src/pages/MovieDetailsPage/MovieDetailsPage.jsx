import { getMovieDetails } from "../../components/Api/apiData";
import Loader from "../../components/Loader/Loader";
import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = useRef(location.state?.from || "/");

  const notify = () => toast.error("Something went wrong. Please, try again!");

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        notify();
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const {
    original_title,
    overview,
    genres = [],
    poster_path,
    vote_average,
  } = movieDetails;

  const scoreToFixed = vote_average ? Number(vote_average).toFixed(2) : "N/A";
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className={css.detailsContainer}>
      <div>
        <Link to={backLink.current} className={css.goBack}>
          Go back
        </Link>
      </div>
      <div className={css.movieInfo}>
        <img
          width="300"
          height="450"
          className={css.img}
          src={posterUrl}
          alt={original_title || "Movie Poster"}
        />
        <div>
          <h1>{original_title}</h1>
          <p>Average score: {scoreToFixed}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul className={css.genreList}>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.addInfo}>
        <h3>Additional information</h3>
        <ul className={css.addInfoList}>
          <li className={css.addInfoItem}>
            <Link
              to="cast"
              state={{ from: location }}
              className={css.addInfoLink}
            >
              Cast
            </Link>
          </li>
          <li className={css.addInfoItem}>
            <Link
              to="reviews"
              state={{ from: location }}
              className={css.addInfoLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
