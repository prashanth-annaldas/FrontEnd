import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { useState } from "react";
import ToastMessage from './toast';

function display({ movie }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.bag);
  const [message, setMessage] = useState("");

  const handleSave = () => {
    const exist = wishlist.find((item) => item.imdbID === movie.imdbID);

    if (exist) {
      setMessage(`${movie.Title} is already in wishlist ⚠️`);
    } else {
      dispatch(bagActions.addToBag(movie));
      setMessage(`${movie.Title} is added to wishlist ✅`);
    }
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="display">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="info">
        <h1>
          {movie.Title} ({movie.Year})
        </h1>
        <br />
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <br />
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <br />
        <p>
          <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>
        <button
          type="button"
          class="btn btn-danger saveButton"
          onClick={handleSave}
        >
          Save
        </button>
        <ToastMessage message = { message }></ToastMessage>
      </div>
    </div>
  );
}

export default display;
