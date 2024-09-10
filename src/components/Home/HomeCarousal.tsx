import { FiThumbsUp } from "react-icons/fi";
import { CarouselMovieType, img } from "../../utils/constant";
import { Link } from "react-router-dom";

interface HomecarousalProps {
  carousalMovies: CarouselMovieType[];
}
function HomeCarousal({ carousalMovies }: HomecarousalProps) {
  return (
    <div className="group carousel-inner h-full">
      {carousalMovies.map((movie, index) => (
        <div
          key={index}
          className={`group cursor-pointer carousel-item ${
            index == 0 ? "active" : ""
          } h-full`}
        >
          <Link to={`/details/${movie.id}`}>
            <div className="relative h-full">
              <img
                src={img + movie?.backdrop_path}
                alt="backdrop"
                className="block w-full h-full object-cover min-h-[300px] aspect-[7/4]"
              />
              <div className="absolute w-full h-full bg-black top-0 left-0 opacity-[.02] group-hover:opacity-20"></div>
              <div className="absolute bottom-0 carousalGradient h-52 w-full"></div>
            </div>
            <div className="absolute bottom-0 md:flex px-6 gap-4 items-end">
              <img
                className="block aspect-[4/6] lg:w-[200px] md:w-[150px] w-[110px]"
                src={img + movie?.poster_path}
                alt="poster"
              />
              <div className="flex flex-col gap-2">
                <h1 className="lg:text-4xl md:text-3xl text-2xl  text-white group-hover:underline">
                  {movie?.title}
                </h1>
                <h2 className="w-[90%] lg:text-xl md:text-lg text-md line-clamp-3 text-zinc-400">
                  {movie?.overview}
                </h2>
                <div className="flex gap-2 items-center text-zinc-400 lg:text-xl md:text-lg text-sm">
                  <FiThumbsUp className="" />
                  <h3>{movie?.vote_count}</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomeCarousal;
