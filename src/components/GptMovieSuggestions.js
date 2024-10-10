import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () =>
{
    const {gptMovies, movieNames} = useSelector((store) => store.gptSlice);
    console.log(movieNames);
    if(!movieNames) return null;
    console.log(gptMovies[0].results);
    return (
        <div className="p-4 m-4 bg-black text-white">
            <div>
                {movieNames.map((movieName, index)=> <MovieList
                    key={movieName}
                    title={movieName}
                    movies={gptMovies[index].results}
                />)}
            </div>
        </div>
    )
}

export default GptMovieSuggestions;