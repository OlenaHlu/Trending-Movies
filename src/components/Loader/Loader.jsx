import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ loading }) => {
  return (
    <div className={css.loader}>
      <ThreeCircles
        loading={loading}
        height="80"
        width="80"
        color="rgb(12, 88, 99)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
