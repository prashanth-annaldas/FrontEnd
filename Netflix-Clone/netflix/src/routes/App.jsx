import { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovies } from "../store/movieDatails";
import { searchMovies } from "../api/tmdb";
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/movieGrid';

function App() {
  const dispatch = useDispatch();
  const {trending, loading} = useSelector((store) => store.movies);
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  const handleSearch = async (query) => {
    const res = await searchMovies(query);
    setSearchRes(res);
  };

  return <div>
    <SearchBar onSearch = { handleSearch }></SearchBar>
    { loading ? <p>Loading...</p> : searchRes.length > 0 ? (<MovieGrid movies={searchRes}></MovieGrid>) : (<MovieGrid movies={trending}></MovieGrid>) }
  </div>;
}

export default App;
