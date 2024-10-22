import toast from "react-hot-toast";
import { getMovieReviews } from "../Api/apiData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";
import { AiOutlineMessage } from "react-icons/ai";

const MovieReviews = () => {
  const [reviewData, setReviewData] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  const notify = () => toast.error("Something went wrong. Please, try again!");

  useEffect(() => {
    const fetchMovieReview = async (movieId) => {
      setLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviewData(data.results);
      } catch (error) {
        notify();
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReview(movieId);
  }, [movieId]);

  return (
    <div className={css.reviewContainer}>
      {loading && <Loader />}
      <ul className={css.reviewlist}>
        {reviewData.length > 0 ? (
          reviewData.map(({ id, author, content }) => (
            <li className={css.reviewItem} key={id}>
              <h3 className={css.reviewAuthor}>
                {author}
                <AiOutlineMessage className={css.icon} />
              </h3>
              <p className={css.reviewContent}>{content}</p>
            </li>
          ))
        ) : (
          <p className={css.sorry}>
            We do not have any reviews for this movie yet...
          </p>
        )}
      </ul>
    </div>
  );
};
export default MovieReviews;
