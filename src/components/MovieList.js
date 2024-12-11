import Movie from "./Movie";
import './MovieList.css';

function MovieList(props)
{
    return(
        <div className="movies"> 
             {props.movies.map(movie => ( <Movie key={movie.imdbID} {...movie} /> ))} 
        </div>
    )
}
export default MovieList;