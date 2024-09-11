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
import { useEffect, useState } from 'react';
import { baseApi } from '../../api/axiosInstance';
import MovieCard from '../Home/MovieCard';
function SimilarMovies(movieId) {
    const [pageNum, setPageNum] = useState('1');
    const [moviesSimilar, setMoviesSimilar] = useState([]);
    const fetchSimilarMovies = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield baseApi.get(`/3/movie/${movieId.movieId}/similar?language=en-US&page=${pageNum}`);
            setMoviesSimilar(response.data.results);
        }
        catch (error) {
            console.log("Similar Movies Error: ", error);
        }
    });
    useEffect(() => {
        fetchSimilarMovies();
    }, [movieId]);
    return (_jsxs("div", { className: 'w-[90%] mx-auto', children: [_jsx("h1", { className: 'text-3xl text-yellow-500 font-bold my-4', children: "Similar Movies" }), _jsx("div", { className: "flex overflow-x-scroll gap-5 items-center noscroll", children: moviesSimilar.map((items, index) => (_jsx("div", { className: 'xl:min-w-[300px] lg:min-w-[280px] md:min-w-[250px] min-w-[200px]', children: _jsx(MovieCard, { movieCard: items }) }))) })] }));
}
export default SimilarMovies;
