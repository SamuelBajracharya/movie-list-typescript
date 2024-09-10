import React from "react";

function HomeCarouselSkeleton() {
  return (
    <div className="relative placeholder-glow h-full">
      <div className="w-full h-full min-h-[300px] aspect-[7/4] placeholder"></div>
      <div className="absolute bottom-0 md:flex px-6 gap-4 items-end w-full">
        <div className="block aspect-[4/6] lg:w-[200px] md:w-[150px] w-[110px] placeholder "></div>
        <div className="flex flex-col gap-2 w-full mt-2">
          <h1 className="lg:text-4xl md:text-3xl text-2xl placeholder w-[40%]"></h1>
          <h2 className="lg:text-xl md:text-lg text-md placeholder w-[95%]"></h2>
          <h2 className="lg:text-xl md:text-lg text-md placeholder w-[80%]"></h2>
          <h2 className="lg:text-xl md:text-lg text-md placeholder w-[45%]"></h2>
          <div className="flex gap-2 lg:text-xl md:text-lg text-sm placeholder w-[10%]"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarouselSkeleton;
