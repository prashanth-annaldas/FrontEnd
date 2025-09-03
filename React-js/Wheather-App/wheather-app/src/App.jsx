import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import WeatherDetails from './components/weatherDetails'
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "609c149046f894fe0724bfa81df11bbf";

  const handleFetching = async ()=>{
    if(!city){
      setError("Please enter a city name...");
      return ;
    }

    try{
      setError("");
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      if(!res.ok){
        throw new Error("City not found");
      }
      const data = await res.json();
      setWeather(data);
    }
    catch(err){
      setError(err.message);
      setWeather(null);
    }
    setCity("");
  }

  return (
      <center className="flex flex-col items-center p-6 bg-blue-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">🌍 Weather App</h1>
        <Input city={ city } setCity = { setCity } handleFetching = { handleFetching } />
        { error && <p className="text-red-500 mt-3">{ error }</p> }
        { weather && <WeatherDetails weather = { weather } /> }
      </center>
  )
}

export default App
