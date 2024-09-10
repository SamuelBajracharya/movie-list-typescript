import { useEffect, useState } from "react";
import { CarouselMovieType } from "../../utils/constant";
import { baseApi } from "../../api/axiosInstance";
import HomeCarousal from "./HomeCarousal";
import HomeCarousalList from "./HomeCarousalList";
import HomeCarouselSkeleton from "../skeleton/HomeCarouselSkeleton";

function HomeSlider() {
  const [carousalMovies, setCarousalMovies] = useState<CarouselMovieType[]>([]);
  const [selected, setSelected] = useState(0);
  const [next, setNext] = useState<number[]>([]);

  useEffect(() => {
    if (carousalMovies.length) {
      const index1 = (selected + 1) % carousalMovies.length;
      const index2 = (selected + 2) % carousalMovies.length;
      const index3 = (selected + 3) % carousalMovies.length;
      setNext([index1, index2, index3]);
    }
  }, [carousalMovies, selected]);

  const slideHandler = (e: Event) => {
    const event = e as any;
    setSelected(event.to);
  };

  useEffect(() => {
    const myCarousal = document.getElementById("carouselExample");
    if (myCarousal) {
      myCarousal.addEventListener("slid.bs.carousel", slideHandler);

      return () => {
        myCarousal.removeEventListener("slid.bs.carousel", slideHandler);
      };
    }
  });

  const fetchUpcoming = async () => {
    try {
      const response = await baseApi.get(
        "/3/movie/upcoming?language=en-US&page=1"
      );
      setCarousalMovies(response.data.results);
    } catch (err) {
      console.log("Fetch upcoming data error", err);
    }
  };
  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div className="row my-6">
      <div className="relative col-xl-8">
        {carousalMovies.length > 0 ? (
          <div id="carouselExample" className="carousel slide h-full">
            <HomeCarousal carousalMovies={carousalMovies} />
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <HomeCarouselSkeleton />
        )}
      </div>
      <div className="col-xl-4 lg:block hidden">
        <HomeCarousalList next={next} carousalMovies={carousalMovies} />
      </div>
    </div>
  );
}

export default HomeSlider;
