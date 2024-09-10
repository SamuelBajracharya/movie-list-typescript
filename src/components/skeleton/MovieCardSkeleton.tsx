import React from "react";

function MovieCardSkeleton() {
  return (
    <div className="col my-4 placeholder-glow">
      <div className="border-2 border-zinc-800 rounded-lg overflow-hidden">
        <div className="relative">
          <div className="aspect-[3/4] placeholder w-full"></div>
        </div>
        <div className="bg-[#222] p-2">
          <h1 className="md:text-[18px] text-[16px] font-semibold mb-2 w-[30%] placeholder"></h1>
          <div className="md:text-[16px] text-sm">
            <h2 className="placeholder w-[50%]"></h2>
            <h2 className="placeholder w-[80%]"></h2>
            <h2 className="placeholder w-[60%]"></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
