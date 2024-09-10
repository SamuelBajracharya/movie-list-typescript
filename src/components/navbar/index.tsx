import React, { ChangeEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { CarouselMovieType } from "../../utils/constant";
import HomeCarousalCard from "../Home/HomeCarousalCard";
import { HiMiniXMark } from "react-icons/hi2";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchMovies, setSearchMovies] = useState<CarouselMovieType[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toogleShow = (bool: boolean) => {
    setShowSearch(bool);
  };

  const fetchSearchMovies = async () => {
    const response = await baseApi.get(
      `/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
    );
    setSearchMovies(response.data.results);
  };

  useEffect(() => {
    fetchSearchMovies();
    setShowSearch(true);
  }, [search]);

  return (
    <nav className="bg-[#121212] py-2">
      <div className="flex justify-between items-center lg:w-[80%] md:w-[90%] w-[95%] mx-auto">
        <div className="flex items-center lg:space-x-16 md:space-x-8 space-x-4">
          <Link to={"/"}>
            <div className="flex flex-col text-yellow-500 md:scale-100 scale-[75%]">
              <h1 className="text-[18px] leading-4">ALLABOUT</h1>
              <h1 className="text-[24px] leading-5 font-semibold ">MOVIES</h1>
            </div>
          </Link>
          <Link to={"/movies"}>
            <button className="text-yellow-500 lg:text-[18px] sm:text-[16px] text-[14px]  hover:underline">
              EXPLORE
            </button>
          </Link>
        </div>
        <div className="relative">
          <input
            placeholder="Search"
            className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[180px] h-10 bg-black text-white md:text-lg sm:text-md text-sm outline-none px-4 placeholder:text-neutral-500 rounded-xl"
            type="text"
            onChange={handleChange}
            onClick={() => toogleShow(true)}
          />
          {showSearch && search.length > 0 && (
            <div
              className="absolute lg:text-2xl md:text-xl text-lg font-bold text-yellow-500 sm:top-2 top-3 right-5 cursor-pointer"
              onClick={() => toogleShow(false)}
            >
              <HiMiniXMark />
            </div>
          )}
          {showSearch && (
            <div className="relative" onClick={() => toogleShow(false)}>
              <div className="fixed md:absolute w-full bg-zinc-800 md:max-w-[500px] left-0  rounded-xl z-50">
                <div className=" px-3 h-fit max-h-[370px] overflow-y-auto noscroll">
                  {searchMovies.length > 0 &&
                    searchMovies.map((item, index) => (
                      <HomeCarousalCard
                        movies={searchMovies}
                        index={index}
                        item={index}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
