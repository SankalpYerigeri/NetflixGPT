import { useSelector } from "react-redux";


const MainContainer = () =>
{
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0];




    return(
        <div>
            Main Container
        </div>
    )
};

export default MainContainer;