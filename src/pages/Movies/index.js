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
import { useEffect, useState } from "react";
import { category } from "../../utils/constant";
import { baseApi } from "../../api/axiosInstance";
import LoadMoreBtn from "../../components/button/LoadMoreBtn";
import MovieList from "../../components/Home/MovieList";
function Movies() {
    const [filter, setFilter] = useState(category[0].name);
    const [pages, setPages] = useState({
        now_playing: 1,
        popular: 1,
        top_rated: 1,
        upcoming: 1,
    });
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const setCategory = (name) => {
        setFilter(name);
    };
    const HandleLoadMore = () => {
        const currentCategory = category.find((category) => category.name == filter);
        if (currentCategory) {
            const nextPage = (pages[(currentCategory.url)]) + 1;
            setPages((prev) => (Object.assign(Object.assign({}, prev), { [currentCategory.url]: nextPage })));
            fetchMovies(currentCategory.url, nextPage);
        }
    };
    const fetchMovies = (path, page) => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield baseApi(`/3/movie/${path}?language=en-US&page=${page}`);
            switch (path) {
                case "now_playing":
                    setNowPlaying((prev) => [...prev, ...response.data.results]);
                    setPopular([]);
                    setTopRated([]);
                    setUpcoming([]);
                    break;
                case "popular":
                    setPopular((prev) => [...prev, ...response.data.results]);
                    setNowPlaying([]);
                    setTopRated([]);
                    setUpcoming([]);
                    break;
                case "top_rated":
                    setTopRated((prev) => [...prev, ...response.data.results]);
                    setNowPlaying([]);
                    setPopular([]);
                    setUpcoming([]);
                    break;
                case "upcoming":
                    setUpcoming((prev) => [...prev, ...response.data.results]);
                    setNowPlaying([]);
                    setPopular([]);
                    setTopRated([]);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log("Explore Movies error: ", error);
        }
    });
    useEffect(() => {
        const current = category.filter((category) => category.name == filter);
        fetchMovies(current[0].url, 1);
    }, [filter]);
    return (_jsxs("div", { className: "w-[90%] mx-auto mt-6", children: [_jsx("h1", { className: "md:text-3xl sm:2xl text-xl text-yellow-500 font-bold", children: "Explore Movies" }), _jsx("div", { className: "flex flex-wrap my-4 gap-2", children: category.map((item, index) => (_jsxs("div", { className: "", children: [_jsx("button", { onClick: () => setCategory(item.name), className: "md:text-base sm:text-sm text-xs font-semibold lg:w-48 md:w-40 sm:w-36 px-4 h-10 lg:h-12 hover:bg-[#121212]", children: item.name }), _jsx("div", { className: `h-0.5 mx-auto bg-yellow-500 ${filter == item.name ? "w-full" : "w-0"} duration-200` })] }, index))) }), filter == "Now Playing" && _jsx(MovieList, { movies: nowPlaying }), filter == "Popular" && _jsx(MovieList, { movies: popular }), filter == "Top Rated" && _jsx(MovieList, { movies: topRated }), filter == "Upcoming" && _jsx(MovieList, { movies: upcoming }), _jsx("div", { className: "mb-44", onClick: () => HandleLoadMore(), children: _jsx(LoadMoreBtn, {}) })] }));
}
export default Movies;
