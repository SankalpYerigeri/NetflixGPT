import { BG_URL } from "../utils/constants";
import GptMovie from "./GptMovie";
import GptSearchBar from "./GptSearchBar";

const Gptsearch = () =>
{
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BG_URL}/>
            </div>
            <GptSearchBar/>
            <GptMovie/>
        </div>
    )
}

export default Gptsearch;