import MovieCard from './MovieCard';

function movieGrid({ movies }){
    return <div className="movie-grid">
        {movies.map((movie)=>(
            <MovieCard key = { movie.id } movie = { movie }></MovieCard>
        ))}
    </div>
}

export default movieGrid;