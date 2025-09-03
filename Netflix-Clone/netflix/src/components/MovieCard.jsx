import React from "react";
import { Link } from "react-router-dom";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function movieCard({ movie }){
    <Link to={`/movie/${movie.id}`}>
        <div className='movie-card'>
            <img src={`${IMAGE_BASE}${movie.poster_path}`} alt={movie.title} />
        </div>
        <h3>{ movie.title }</h3>
    </Link>
}

export default movieCard;