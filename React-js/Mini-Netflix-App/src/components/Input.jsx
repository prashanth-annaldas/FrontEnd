function Input({ movieName, setMovieName, handleFetching }) {
  return (
    <form onSubmit={ handleFetching }>
      <input
        type="text"
        placeholder="Search movies & web series.."
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        className="searchBar"
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
  );
}

export default Input;
