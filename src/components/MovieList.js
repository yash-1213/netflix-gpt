import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-transparent">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto [&::-webkit-scrollbar]:w-0">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterUrl={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
