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
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosInstance";
import MovieList from "../../components/Home/MovieList";
import LoadMoreBtn from "../../components/button/LoadMoreBtn";
function Home() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const fetchMovies = (page) => __awaiter(this, void 0, void 0, function* () {
        const response = yield baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}`);
        try {
            // console.log(response.data.results)
            setMovies((prev) => [...prev, ...response.data.results]);
        }
        catch (err) {
            console.log("Top movies err: ", err);
        }
    });
    useEffect(() => {
        fetchMovies(page);
    }, [page]);
    return (_jsxs("div", { className: "w-[90%] mx-auto mb-44", children: [_jsx(HomeSlider, {}), _jsx(MovieList, { movies: movies, title: "Top Rated Movies" }), _jsx("div", { onClick: () => {
                    setPage((prev) => prev + 1);
                }, children: _jsx(LoadMoreBtn, {}) })] }));
}
export default Home;
