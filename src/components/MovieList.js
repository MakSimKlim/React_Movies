import Movie from "./Movie";
import './MovieList.css';

function MovieList(props)
{
    return(
        <div className="movies"> 
             {
                !props.movies ? <h2>Ошибка ввода данных</h2> : 
                props.movies.map(m => {return <Movie key={m.imdbID} {...m}/> })
             } 
        </div>
    )
}
export default MovieList;