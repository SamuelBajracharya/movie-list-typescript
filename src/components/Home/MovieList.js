import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import MovieCard from "./MovieCard";
function MovieList({ movies, title }) {
    return (_jsxs("div", { className: "md:mt-14 sm:mt-8 mt-4", children: [title &&
                _jsx("h1", { className: "md:text-3xl sm:2xl text-xl text-yellow-500 font-bold", children: title }), _jsx("div", { className: "row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2", children: movies.length > 0 ? (movies.length > 0 && movies.map((movie, index) => (_jsx(MovieCard, { movieCard: movie }, index)))) : ([...Array(20)].map((item) => (_jsx(MovieCardSkeleton, {})))) })] }));
}
export default MovieList;
