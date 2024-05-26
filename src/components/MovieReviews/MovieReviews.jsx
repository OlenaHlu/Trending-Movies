import toast from "react-hot-toast";
import { getMovieReviews } from "../Api/apiData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

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
    <div>
      {loading && <Loader />}
      <ul>
        {reviewData.length > 0 ? (
          reviewData.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We do not have any reviews for this movie yet</p>
        )}
      </ul>
    </div>
  );
};
export default MovieReviews;
