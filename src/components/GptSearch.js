import { BG_URL } from "../utils/constants";
import GptMovie from "./GptMovie";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const Gptsearch = () =>
{
    return (
        <>
        <div className="fixed -z-10 ">
            <img className="h-screen object-cover md:h-auto" src={BG_URL}/>
        </div>
        <div >            
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
        </>
    )
}

export default Gptsearch;