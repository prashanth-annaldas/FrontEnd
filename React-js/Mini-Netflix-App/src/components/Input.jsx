function Input({ movieName, setMovieName, handleFetching }) {
  return (
    <form onSubmit={ handleFetching }>
      <input
        type="text"
        placeholder="Enter any movie"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        className="searchBar"
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
  );
}

export default Input;
