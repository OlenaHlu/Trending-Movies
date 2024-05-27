import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch} className={css.form}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="searchMovie"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        className={css.input}
      ></input>
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
