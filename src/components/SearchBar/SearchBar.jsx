import css from "./SearchBar.module.css";
import { MdMovieEdit } from "react-icons/md";

const SearchBar = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch} className={css.form}>
      <div className={css.iconPosition}>
        <MdMovieEdit className={css.icon} />
        <input
          type="text"
          autoComplete="off"
          autoFocus
          // placeholder="Search movie"
          name="searchMovie"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={css.input}
        ></input>
      </div>
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
