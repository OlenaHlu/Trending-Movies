import toast from "react-hot-toast";
import { getMovieCast } from "../Api/apiData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  const notify = () => toast.error("Something went wrong. Please, try again!");

  useEffect(() => {
    const fetchMovieCast = async (movieId) => {
      setLoading(true);
      try {
        const data = await getMovieCast(movieId);
        setCastData(data.cast);
      } catch (error) {
        notify();
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.castList}>
        {castData.length > 0
          ? castData.map(({ id, name, profile_path, character }) => (
              <li key={id} className={css.castItem}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={name}
                  width="150"
                  height="210"
                  className={css.image}
                />
                <h3 className={css.name}>{name}</h3>
                <p className={css.character}>Character: {character}</p>
              </li>
            ))
          : !loading && (
              <p className={css.sorry}>
                Sorry, there is not any info about Cast...
              </p>
            )}
      </ul>
    </div>
  );
};

export default MovieCast;
