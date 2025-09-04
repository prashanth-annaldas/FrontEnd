import { useState } from 'react'
import Input from './components/Input';
import ErrorMsg from './components/ErrorMsg';
import Display from './components/display';
import './App.css'

function App() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  
  const API_URL = "https://www.omdbapi.com/?apikey=acc614ce"

  const handleFetching = async (e)=>{
    e.preventDefault();
    if(!movieName.trim()){
      setError("Enter any movie name");
      return ;
    }
    setMovie(null);
    setError("");
    try{
      setError("");
      const res = await fetch(`${API_URL}&t=${movieName}`);
      const data = await res.json();

      if(data.Response === "True"){
        setMovie(data);
        setMovieName("");
      }
      else{
        setError(data.Error || "Movie Not Found!!");
      }
    }
    catch(err){
      setError(err.message || "Failed to fetch Movie");
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Input movieName={ movieName } setMovieName={ setMovieName } handleFetching={ handleFetching } />
      { error && <ErrorMsg error={ error } /> }
      { movie && <Display movie={ movie } /> }
    </div>
  )
}

export default App
