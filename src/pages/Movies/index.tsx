import { useEffect, useState } from "react";
import { category, CategoryType, TopMovieType } from "../../utils/constant";
import { baseApi } from "../../api/axiosInstance";
import LoadMoreBtn from "../../components/button/LoadMoreBtn";
import MovieList from "../../components/Home/MovieList";

export interface PageType {
  now_playing: number;
  popular: number;
  top_rated: number;
  upcoming: number;
}

function Movies() {
  const [filter, setFilter] = useState(category[0].name);
  const [pages, setPages] = useState<PageType>({
    now_playing: 1,
    popular: 1,
    top_rated: 1,
    upcoming: 1,
  });

  const [nowPlaying, setNowPlaying] = useState<TopMovieType[]>([]);
  const [popular, setPopular] = useState<TopMovieType[]>([]);
  const [topRated, setTopRated] = useState<TopMovieType[]>([]);
  const [upcoming, setUpcoming] = useState<TopMovieType[]>([]);

  const setCategory = (name: string) => {
    setFilter(name);
  };

  const HandleLoadMore = () => {
    const currentCategory = category.find(
      (category: CategoryType) => category.name == filter
    );
    if (currentCategory) {
      const nextPage = (pages[(currentCategory.url)  as keyof PageType]) + 1;
      setPages((prev) => ({
        ...prev,
        [currentCategory.url]: nextPage,
      }));
      fetchMovies(currentCategory.url, nextPage);
    }
  };

  const fetchMovies = async (path: string, page: number) => {
    try {
      const response = await baseApi(
        `/3/movie/${path}?language=en-US&page=${page}`
      );
      switch (path) {
        case "now_playing":
          setNowPlaying((prev) => [...prev, ...response.data.results]);
          setPopular([])
          setTopRated([])
          setUpcoming([])
          break;
        case "popular":
          setPopular((prev) => [...prev, ...response.data.results]);
          setNowPlaying([])
          setTopRated([])
          setUpcoming([])
          break;
        case "top_rated":
          setTopRated((prev) => [...prev, ...response.data.results]);
          setNowPlaying([])
          setPopular([])
          setUpcoming([])
          break;
        case "upcoming":
          setUpcoming((prev) => [...prev, ...response.data.results]);
          setNowPlaying([])
          setPopular([])
          setTopRated([])
          break;
        default:
          break;
      }
    } catch (error) {
      console.log("Explore Movies error: ", error);
    }
  };

  useEffect(() => {
    const current = category.filter((category) => category.name == filter);
    fetchMovies(current[0].url, 1);
  }, [filter]);

  return (
    <div className="w-[90%] mx-auto mt-6">
      <h1 className="md:text-3xl sm:2xl text-xl text-yellow-500 font-bold">Explore Movies</h1>
      <div className="flex flex-wrap my-4 gap-2">
        {category.map((item, index) => (
          <div key={index} className="">
            <button
              onClick={() => setCategory(item.name)}
              className="md:text-base sm:text-sm text-xs font-semibold lg:w-48 md:w-40 sm:w-36 px-4 h-10 lg:h-12 hover:bg-[#121212]"
            >
              {item.name}
            </button>
            <div
              className={`h-0.5 mx-auto bg-yellow-500 ${
                filter == item.name ? "w-full" : "w-0"
              } duration-200`}
            ></div>
          </div>
        ))}
      </div>
      {filter == "Now Playing" && <MovieList movies={nowPlaying} />}
      {filter == "Popular" && <MovieList movies={popular} />}
      {filter == "Top Rated" && <MovieList movies={topRated} />}
      {filter == "Upcoming" && <MovieList movies={upcoming} />}

      <div className="mb-44"
      onClick={() => HandleLoadMore()}>
        <LoadMoreBtn />
      </div>
    </div>
  );
}

export default Movies;
