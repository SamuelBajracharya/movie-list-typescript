import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import Youtube from "react-youtube";
import YouTube, { YouTubeProps } from 'react-youtube';
import { TrailerProps } from "../../utils/constant";

function Trailers({ movieId }: TrailerProps) {
  const [trailers, settrailers] = useState<{ key: string; name: string }[]>([]);
  const FetchTrailers = async () => {
    try {
      const response = await baseApi(
        `/3/movie/${movieId}/videos?language=en-US`
      );
      const data = response.data.results;
      const trailerObj = data.filter(
        (result: { type: string }) => result.type == "Trailer"
      );
      settrailers(trailerObj);
    } catch (error) {
      console.log("Trailer Fetch error: ", error);
    }
  };

  useEffect(() => {
    FetchTrailers();
  }, [movieId]);

  const opts: YouTubeProps['opts'] = {
    height: "230",
    width: "350",
  };

  return (
    <div>
      {trailers.length > 0 && (
        <div className="w-[90%] mx-auto my-28">
          <h1 className="md:text-3xl sm:2xl text-xl text-yellow-500 font-bold">Watch Trailers</h1>
          <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
            {trailers.map((link, index) => (
              <div key={index} className="flex flex-col gap-4 mt-4">
                <YouTube videoId={link.key} opts={opts} />
                <h1 className="md:text-xl sm:text-lg text-md w-[380px] px-2">{link.name}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Trailers;
