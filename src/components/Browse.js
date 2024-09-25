import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";


const Browse = () =>

    {

    const dispatch = useDispatch();

    const nowPlayingMovies = async () =>
    {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>
    {
        nowPlayingMovies();
    }, []);


    return <div>
        <Header/>
        Browse
        </div>
};

export default Browse;