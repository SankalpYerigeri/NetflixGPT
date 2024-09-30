
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

import { useSelector } from "react-redux";
import Gptsearch from "./GptSearch";




const Browse = () =>

{

    const gptToggle = useSelector((store) => store.gptSlice.toggleGptSearch);
    console.log(gptToggle);
    useNowPlayingMovies();
    usePopularMovies();

    
    return(
        <div>
            <Header/>
            { gptToggle ? <Gptsearch/> :
            <>            
                <MainContainer/>
                <SecondaryContainer/>
            </>
            }
            
        </div>
    )
};

export default Browse;