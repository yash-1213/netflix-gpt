import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptSearchMovies, gptSearchMovieNames } = gpt;

  return (
    <div>
      <div className={`p-4 m-4 ${gptSearchMovieNames?.length ? "bg-black" : ""} text-white bg-opacity-80`}>
        {gptSearchMovieNames?.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={gptSearchMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
