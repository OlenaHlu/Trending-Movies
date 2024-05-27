import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ loading }) => {
  return (
    <div className={css.loader}>
      <ThreeCircles
        // visible={true}
        loading={loading}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
