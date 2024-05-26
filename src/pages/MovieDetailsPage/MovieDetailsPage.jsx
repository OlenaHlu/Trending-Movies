import { getMovieDetails } from "../../components/Api/apiData";
import Loader from "../../components/Loader/Loader";
import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const backLink = useRef(location.state?.from || "/");

  const notify = () => toast.error("Something went wrong. Please, try again!");

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        notify();
      } finally {
        setLoading(false);
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
    <div>
      <div>
        <Link to={backLink.current}>Go back</Link>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <img src={posterUrl} alt={original_title || "Movie Poster"} />
          </div>
          <h1>{original_title}</h1>
          <p>Average score: {scoreToFixed}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast" state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
