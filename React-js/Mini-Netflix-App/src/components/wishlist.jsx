import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

function Wishlist() {
  const wishlist = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const handleDeleteButton = (imdbID)=>{
    dispatch(bagActions.removeFromBag(imdbID));
  }
  return (
    <div className="wishlistDiv">
      <h2 className="myWishlist">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No movies added yet</p>
      ) : (
        <ul className="moviesContainer">
          {wishlist.map((movie) => (
            <li key={movie.imdbID} className="movieContainer">
                <img
                className="bagImage"
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/100x150?text=No+Image"
                }
                alt={movie.Title}
              />
              <span>{movie.Title}</span>
              <span>({movie.Year})</span>
              <div class="remove_item" onClick={()=> handleDeleteButton(movie.imdbID)}>X</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
