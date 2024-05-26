const SearchBar = ({ onSearch }) => {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        name="searchMovie"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
