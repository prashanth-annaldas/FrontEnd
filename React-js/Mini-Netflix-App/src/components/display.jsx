import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/BagSlice';

function display({ movie }) {

  const dispatch = useDispatch();

  const hanldeSave = ()=>{
    dispatch(bagActions.addToBag(movie.imdbID))
  }

  return (
    <div className="display">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="info">
        <h1>
            {movie.Title} ({movie.Year})
        </h1><br />
        <p>
            <strong>Genre:</strong> {movie.Genre}
        </p><br />
        <p>
            <strong>Plot:</strong> {movie.Plot}
        </p><br />
        <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>
        <button type="button" class="btn btn-danger saveButton" onClick={ hanldeSave } >Save</button>
      </div>
    </div>
  );
}

export default display;
