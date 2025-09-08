function bag({ movie }) {
  return <div>
    <img src={movie.poster} />
    <h3>{movie.title}</h3>
  </div>
}
export default bag;
