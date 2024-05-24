import { ThreeCircles } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    <div>
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
