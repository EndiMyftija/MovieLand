
function Movie({movie}) {
    return (
        <div className='movie'>
          <div>
            <p>{movie.release_date}</p>
          </div>
          <div>
            {movie.backdrop_path != null ? 
            (
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
            ) : 
            (
                <img src="https://via.placeholder.com/400"/>
            )}
          </div>

          <div>
            <span>{movie.original_language}</span>
            <h3>{movie.original_title}</h3>
          </div>
        </div>
    )
}

export default Movie;