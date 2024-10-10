import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () =>
{
    const dispatch = useDispatch();
    const popularMoviesData = useSelector((store) => store.movies.popularMovies)

    const popularMovies = async () =>
    {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>
    {
        if(!popularMoviesData) popularMovies();
    }, []);
}

export default usePopularMovies;