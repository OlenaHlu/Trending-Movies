import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.movieItem}
          >
            <img
              className={css.filmPoster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : `https://via.placeholder.com/500x750?text=No+Image`
              }
              alt={movie.title}
            />
            <div className={css.titleContainer}>
              <p className={css.title}>{movie.title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
