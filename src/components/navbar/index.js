var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import HomeCarousalCard from "../Home/HomeCarousalCard";
import { HiMiniXMark } from "react-icons/hi2";
function Navbar() {
    const [search, setSearch] = useState("");
    const [searchMovies, setSearchMovies] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const toogleShow = (bool) => {
        setShowSearch(bool);
    };
    const fetchSearchMovies = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield baseApi.get(`/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`);
        setSearchMovies(response.data.results);
    });
    useEffect(() => {
        fetchSearchMovies();
        setShowSearch(true);
    }, [search]);
    return (_jsx("nav", { className: "bg-[#121212] py-2", children: _jsxs("div", { className: "flex justify-between items-center lg:w-[80%] md:w-[90%] w-[95%] mx-auto", children: [_jsxs("div", { className: "flex items-center lg:space-x-16 md:space-x-8 space-x-4", children: [_jsx(Link, { to: "/", children: _jsxs("div", { className: "flex flex-col text-yellow-500 md:scale-100 scale-[75%]", children: [_jsx("h1", { className: "text-[18px] leading-4", children: "ALLABOUT" }), _jsx("h1", { className: "text-[24px] leading-5 font-semibold ", children: "MOVIES" })] }) }), _jsx(Link, { to: "/movies", children: _jsx("button", { className: "text-yellow-500 lg:text-[18px] sm:text-[16px] text-[14px]  hover:underline", children: "EXPLORE" }) })] }), _jsxs("div", { className: "relative", children: [_jsx("input", { placeholder: "Search", className: "lg:w-[500px] md:w-[400px] sm:w-[300px] w-[180px] h-10 bg-black text-white md:text-lg sm:text-md text-sm outline-none px-4 placeholder:text-neutral-500 rounded-xl", type: "text", onChange: handleChange, onClick: () => toogleShow(true) }), showSearch && search.length > 0 && (_jsx("div", { className: "absolute lg:text-2xl md:text-xl text-lg font-bold text-yellow-500 sm:top-2 top-3 right-5 cursor-pointer", onClick: () => toogleShow(false), children: _jsx(HiMiniXMark, {}) })), showSearch && (_jsx("div", { className: "relative", onClick: () => toogleShow(false), children: _jsx("div", { className: "fixed md:absolute w-full bg-zinc-800 md:max-w-[500px] left-0  rounded-xl z-50", children: _jsx("div", { className: " px-3 h-fit max-h-[370px] overflow-y-auto noscroll", children: searchMovies.length > 0 &&
                                        searchMovies.map((item, index) => (_jsx(HomeCarousalCard, { movies: searchMovies, index: index, item: index }))) }) }) }))] })] }) }));
}
export default Navbar;
