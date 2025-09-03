function weatherDetails({ weather }) {
  return (
    <div className="mt-6 p-4 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-2xl font-semibold">{weather.name}</h1>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-3xl font-bold">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default weatherDetails;
