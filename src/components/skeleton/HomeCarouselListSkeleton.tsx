import React from "react";

function HomeCarouselListSkeleton() {
  return (
    <div className="col-xl-12 col placeholder-glow min-w-[250px]">
      <div className="flex gap-2 my-8 ">
        <div className="w-[110px] aspect-[5/7] placeholder"></div>
        <div className="flex flex-col gap-3 w-[180px] xl:w-[250px]">
          <h1 className="text-lg font-semibold placeholder w-[40%]"></h1>
          <div>
          <h1 className="text-md w-[95%] placeholder"></h1>
          <h1 className="text-md w-[75%] placeholder"></h1>
          <h1 className="text-md w-[100%] placeholder"></h1>
          <div className="text-md w-[20%] placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarouselListSkeleton;
