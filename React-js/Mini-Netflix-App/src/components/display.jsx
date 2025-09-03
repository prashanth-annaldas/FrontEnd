function display({ movie }) {
  return (
    <div className="display">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="info">
        <h2>
            {movie.Title} ({movie.Year})
        </h2><br />
        <p>
            <strong>Genre:</strong> {movie.Genre}
        </p><br />
        <p>
            <strong>Plot:</strong> {movie.Plot}
        </p><br />
        <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
}

export default display;
