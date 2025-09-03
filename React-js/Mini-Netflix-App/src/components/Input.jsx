function Input({ movieName, setMovieName, handleFetching }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter any movie"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        className="searchBar"
      />
      <button className="searchButton" onClick={ handleFetching }>Search</button>
    </div>
  );
}

export default Input;
