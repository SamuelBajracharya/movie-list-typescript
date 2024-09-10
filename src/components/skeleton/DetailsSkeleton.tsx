import React from "react";

function DetailsSkeleton() {
  return (
    <div className="relative w-full h-fit placeholder-glow">
      <div className="relative">
        <div className="w-full min-h-[500px] h-full aspect-[7/4] object-cover placeholder"></div>
        <div className="absolute w-full h-full bottom-0 carousalGradient"></div>
      </div>
      <div className="absolute top-0 w-full pb-28">
        <div className="lg:flex w-[90%] mx-auto xl:mt-[630px] lg:mt-[500px] md:mt-[400px] sm:mt-[300px] mt-[180px]  gap-8">
          <div className="xl:w-[350px] lg:w-[300px] md:[250px] sm:w-[230px] w-[200px] aspect-[4/6] placeholder"></div>
          <div className="flex flex-col w-full lg:w-[1200px] mt-2">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl placeholder w-[35%]"></h1>
            <div className="lg:text-xl md:text-lg sm:text-md text-sm mt-4">
              <h2 className="placeholder w-[50%]"></h2>
              <h2 className="placeholder w-[90%]"></h2>
              <h2 className="placeholder w-[90%]"></h2>
              <h2 className="placeholder w-[70%]"></h2>
              <h2 className="placeholder w-[50%]"></h2>
              <div className="mt-4 flex flex-col gap-3">
              <h2 className="placeholder w-[30%]"></h2>
              <h2 className="placeholder w-[20%]"></h2>
              <h2 className="placeholder w-[40%]"></h2>
              <h2 className="placeholder w-[30%]"></h2>
              </div>
            </div>
          </div>
        </div>
        {/* <Trailers movieId={String(params.id)} />
        <SimilarMovies movieId={String(params.id)} /> */}
      </div>
    </div>
  );
}

export default DetailsSkeleton;
