import { Link } from "react-router-dom";
import { CarouselMovieType, img } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";
import HomeCarousalCard from "./HomeCarousalCard";
import HomeCarouselListSkeleton from "../skeleton/HomeCarouselListSkeleton";

interface HomeCarousalListProps {
  next: number[];
  carousalMovies: CarouselMovieType[];
}
function HomeCarousalList({ next, carousalMovies }: HomeCarousalListProps) {
  return (
    <div>
      <h1 className="font-bold text-xl text-yellow-500">Up Next</h1>
      <div className="row">
        {carousalMovies.length > 0 ? (
          next.map((item, index) => (
            <HomeCarousalCard
              key={index}
              movies={carousalMovies}
              item={item}
              index={index}
            />
          ))
        ) : (
          [...Array(3)].map((item) =>(
            <HomeCarouselListSkeleton />
          ))
        )}
      </div>
    </div>
  );
}

export default HomeCarousalList;
