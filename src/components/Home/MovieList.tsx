import { img, TopMovieType } from "../../utils/constant";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import MovieCard from "./MovieCard";

interface movieListProps {
  movies: TopMovieType[];
  title?: string;
}

function MovieList({ movies, title }: movieListProps) {
  return (
    <div className="md:mt-14 sm:mt-8 mt-4">
      {title &&
      <h1 className="md:text-3xl sm:2xl text-xl text-yellow-500 font-bold">{title}</h1>
      }
      <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        { movies.length > 0 ? (

          movies.length > 0 && movies.map((movie, index) => (
            <MovieCard key={index} movieCard = { movie } />
          ))
        ): (
          [...Array(20)].map((item) => (
            <MovieCardSkeleton />
          ))
        )
        }
      </div>
    </div>
  );
}

export default MovieList;
