import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () =>
{
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log(movies);
    
    console.log("From the main container", movies);


    return(
        <div>
            <VideoTitle/>
            <VideoBackground/>
        </div>
    )
};

export default MainContainer;