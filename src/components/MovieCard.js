import { IMG_CDN_URL } from "../utils/util";

const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-48 mr-3">
      <img alt="movie card" src={IMG_CDN_URL + posterUrl} />
    </div>
  );
};

export default MovieCard;
