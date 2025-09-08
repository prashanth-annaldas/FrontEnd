import { useState } from "react";
import ErrorMsg from "./components/ErrorMsg";
import Display from "./components/display";
import Header from "./components/header";
import Sidebar from "./components/SideBar";
import Bag from './Bag';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Search");

  const API_URL = "https://www.omdbapi.com/?apikey=acc614ce";

  const handleFetching = async (e) => {
    e.preventDefault();
    if (!movieName.trim()) {
      setError("Enter any movie name");
      return;
    }
    setMovie(null);
    setError("");
    setLoading(true);
    try {
      setError("");
      const res = await fetch(`${API_URL}&t=${movieName}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
        setMovieName("");
      } else {
        setError(data.Error || "Movie Not Found!!");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch Movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container" style={{ textAlign: "center" }}>
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        {selectedTab === "Search" ? (
          <>
            <Header
              movieName={movieName}
              setMovieName={setMovieName}
              handleFetching={handleFetching}
            />
            {error && <ErrorMsg error={error} />}
            {movie && <Display movie={movie} />}
            {loading && <h2 className="loading">⏳ Loading...</h2>}
          </>
        ) : (
          <Bag movie={movie} ></Bag>
        )}
      </div>
    </div>
  );
}

export default App;
