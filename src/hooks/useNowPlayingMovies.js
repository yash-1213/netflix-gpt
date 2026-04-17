import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/util";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
