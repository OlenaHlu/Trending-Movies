const SearchBar = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="searchMovie"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
