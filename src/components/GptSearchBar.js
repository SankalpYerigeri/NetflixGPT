import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
import { addgptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const langKey = useSelector((store) => store.config.languageMode);
  console.log("From store", langKey);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        { movie } +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    console.log(json);

    return json;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const theme = searchText.current.value;
    console.log(theme);

    const prompt =
      "You are a movie recommendation system. Based on the given list of movie themes or titles, provide exactly five movie recommendations that match the style, genre, or vibe of the input. The output should be formatted similarly to: [Golmaal, OMG, Om Shanti Om, Zindagi Na Milegi Dobara, Ugram Veeram]. Do not ask for further clarification or inputs—just respond with five movie names that fit the provided theme. Do not provide the same out put with every search..Input : " +
      { theme };

    const result = await model.generateContent(prompt);

    const moviesArray = result.response.text().split(",");

    const promiseArray = moviesArray.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addgptMovies({movieNames : moviesArray, movieResults : tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
