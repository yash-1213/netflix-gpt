import { IMG_CDN_URL } from "../utils/util";

const MovieCard = ({ posterUrl }) => {
  if (!posterUrl) return null;
  return (
    <div className="w-36 h-40 md:w-48 mr-3">
      <img alt="movie card" src={IMG_CDN_URL + posterUrl} />
    </div>
  );
};

export default MovieCard;
