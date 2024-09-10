import { Link } from "react-router-dom";
import { img, TopMovieType } from "../../utils/constant";

interface MovieCardProps {
  movieCard: TopMovieType;
}
function MovieCard({ movieCard }: MovieCardProps) {
  return (
    <Link to={`/details/${movieCard.id}`}>
      <div className="col my-4">
        <div className=" group border-2 border-zinc-800 rounded-lg overflow-hidden hover:scale-105 duration-100 cursor-pointer">
          <div className="relative">
            <img
              src={img + movieCard.poster_path}
              alt="posters"
              className="aspect-[3/4]"
            />
            <div className="absolute bottom-0 w-full h-50 carousalGradient"></div>
          </div>
          <div className="bg-[#222] p-2">
            <h1 className="md:text-[18px] text-[16px] font-semibold line-clamp-1 mb-2 group-hover:underline">
              {movieCard.title}
            </h1>
            <div className="md:text-[16px] text-sm text-zinc-300">
              <h2>Rating: {String(movieCard.vote_average).substring(0, 3)}</h2>
              <h2>Language: {movieCard.original_language}</h2>
              <h2>Release: {movieCard.release_date}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
