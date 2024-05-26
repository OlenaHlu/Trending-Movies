// import toast from "react-hot-toast";
// import { getMovieCast } from "../Api/apiData";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../Loader/Loader";

// const MovieCast = () => {
//   const [castData, setCastData] = useState([]);
//   const { movieId } = useParams();
//   const [loading, setLoading] = useState(false);

//   const notify = () => toast.error("Something went wrong. Please, try again!");

//   useEffect(() => {
//     const fetchMovieCast = async (movieId) => {
//       try {
//         const data = await getMovieCast(movieId);
//         setCastData(data.cast);
//       } catch (error) {
//         notify();
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovieCast();
//   }, [movieId]);

//   return (
//     <div>
//       <ul>
//         {loading ? (
//           <Loader />
//         ) : castData.length > 0 ? (
//           castData.map(({ id, name, profile_path, character }) => (
//             <li key={id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${profile_path}`}
//                 alt={name}
//               />
//               <h3>{name}</h3>
//               <p> Character: {character}</p>
//             </li>
//           ))
//         ) : (
//           "Sorry, there isn't any info :("
//         )}
//       </ul>
//     </div>
//   );
// };
// export default MovieCast;

import toast from "react-hot-toast";
import { getMovieCast } from "../Api/apiData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

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
      <ul>
        {castData.length > 0
          ? castData.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : "https://via.placeholder.com/150"
                  }
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            ))
          : !loading && <p>Sorry, there is not any info...</p>}
      </ul>
    </div>
  );
};

export default MovieCast;
