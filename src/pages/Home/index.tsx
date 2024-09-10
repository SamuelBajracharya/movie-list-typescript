import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosInstance";
import { TopMovieType } from "../../utils/constant";
import MovieList from "../../components/Home/MovieList";
import LoadMoreBtn from "../../components/button/LoadMoreBtn";

function Home() {
  const [movies, setMovies] = useState<TopMovieType[]>([]);
  const [page, setPage] = useState(1);
  const fetchMovies = async (page: number) => {
    const response = await baseApi.get(
      `/3/movie/top_rated?language=en-US&page=${page}`
    );
    try {
      // console.log(response.data.results)
      setMovies((prev) => [...prev, ...response.data.results]);
    } catch (err) {
      console.log("Top movies err: ", err);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <div className="w-[90%] mx-auto mb-44">
      <HomeSlider />
      <MovieList movies={movies} title="Top Rated Movies" />
      <div
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        <LoadMoreBtn />
      </div>
    </div>
  );
}

export default Home;
