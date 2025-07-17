function Time() {
    let time = new Date();
  return <p>This is shows time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;

}

export default Time;