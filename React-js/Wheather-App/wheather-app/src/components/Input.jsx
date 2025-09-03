function Input({city, setCity, handleFetching}) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={city}
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-lg border border-gray-300"
      />
      <button
        onClick={handleFetching}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default Input;
