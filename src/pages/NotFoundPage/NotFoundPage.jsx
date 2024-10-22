import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { GiReturnArrow } from "react-icons/gi";

const NotFoundPage = () => {
  return (
    <div className={css.notFound}>
      <p className={css.text}>
        Sorry, page not found! Please go to{" "}
        <Link to="/" className={css.link}>
          home page! <GiReturnArrow />
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
