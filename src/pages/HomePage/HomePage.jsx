import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../components/Api/apiData";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";

import { Link, useLocation } from "react-router-dom";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const notify = () => toast.error("Sorry, something went wrong!");

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const data = await getTrendingMovies();
        setTrendMovies(data.results);
      } catch (error) {
        notify();
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePageContainer}>
      <h1 className={css.homePageTitle}>Trending today</h1>
      {loading && <Loader />}
      <ul className={css.homePageList}>
        {trendMovies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.homePageLink}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
