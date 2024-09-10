import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { useEffect, useState } from "react";
import { img, MovieDetailsType } from "../../utils/constant";
import Trailers from "../../components/MovieDetails/Trailers";
import SimilarMovies from "../../components/MovieDetails/SimilarMovies";
import DetailsSkeleton from "../../components/skeleton/DetailsSkeleton";

function Details() {
  const params = useParams();
  const [details, setDetails] = useState<MovieDetailsType>();

  const fetchDetails = async () => {
    try {
      const response = await baseApi.get(
        `/3/movie/${params.id}?language=en-US`
      );
      setDetails(response.data);
    } catch (error) {
      console.log("Movie Details error: ", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);

  return (
    <div>
      {details && params.id ? (
        <div className="relative w-full h-fit">
          <div className="relative">
            <img
              src={img + details?.backdrop_path}
              alt="detailsbackdrop"
              className="opacity-40 w-full min-h-[500px] aspect-[7/4] object-cover"
            />
            <div className="absolute w-full h-full bottom-0 carousalGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-28">
            <div className="lg:flex w-[90%] mx-auto xl:mt-[630px] lg:mt-[500px] md:mt-[400px] sm:mt-[300px] mt-[180px]  gap-8">
              <img
                src={img + details?.poster_path}
                alt="poster"
                className="xl:w-[350px] lg:w-[300px] md:[250px] sm:w-[230px] w-[200px] h-fit aspect-[4/6]"
              />
              <div className="flex flex-col">
                <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl">
                  {details?.title}
                  <span className=" italic text-zinc-500 lg:text-4xl md:text-3xl text-2xl px-2">
                    ({String(details?.release_date).substring(0, 4)})
                  </span>
                </h1>
                <div className="lg:text-xl md:text-lg sm:text-md text-sm text-slate-300 mt-4">
                  <h2>{details?.tagline}</h2>
                  <h2>{details?.overview}</h2>
                  <div className="mt-4 flex flex-col gap-3">
                    <h2>
                      Genre:{" "}
                      {details?.genres?.map((item) => item.name).join(", ")}
                    </h2>
                    <h2>
                      Rating: {String(details?.vote_average).substring(0, 3)}
                    </h2>
                    <h2>Original Language: {details?.original_language}</h2>
                    <h2>Release Date: {details?.release_date}</h2>
                  </div>
                </div>
              </div>
            </div>
              <Trailers movieId={String(params.id)} />
              <SimilarMovies movieId={String(params.id)} />
          </div>
        </div>
      ):(
        <DetailsSkeleton />
      )
    }
    </div>
  );
}

export default Details;
