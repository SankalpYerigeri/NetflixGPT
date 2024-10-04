import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";


const GptSearchBar = ()  =>
{
    const searchText  = useRef(null);

    const langKey = useSelector((store)=>store.config.languageMode);
    console.log("From store",langKey);

    
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input
                 ref={searchText}
                 type="text"
                 placeholder={lang[langKey].gptSearchPlaceHolder}
                 className="p-4 m-4 col-span-9"
                 />
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                        onClick={handleGptSearchClick}>
                    {lang[langKey].search} 
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;