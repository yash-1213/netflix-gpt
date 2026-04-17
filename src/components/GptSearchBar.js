import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../openai";
import { API_OPTIONS, SEARCH_MOVIE_URL } from "../utils/util";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.language);
  const searchVal = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query ${searchVal.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Stree, Stree2, Sholay, Golmaal, koi Mil gaya`;
    // API call to openAI to get the movie result
    // const gptResults = await openai.chat.completions.create({
    //   model: "gpt-4o",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    const gptResults = "Hera Pheri, Stree, Stree2, Golmaal, Padosan";
    const results = gptResults?.split(", ");
    const promiseArray = results?.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({ movieNames: results, movieResults: tmdbResults }));
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(`${SEARCH_MOVIE_URL}${movie}`, API_OPTIONS);
    const json = await data?.json();
    return json.results;
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-md" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchVal} type="text" className="p-4 m-4 col-span-9 rounded-md" placeholder={lang?.[selectedLang]?.gptSearchPlaceholder} />
        <button className="p-4 bg-red-600 m-4 rounded-md hover:bg-red-500 text-white col-span-3" onClick={handleGptSearchClick}>
          {lang?.[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
