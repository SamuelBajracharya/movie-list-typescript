import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HomeCarousalCard from "./HomeCarousalCard";
import HomeCarouselListSkeleton from "../skeleton/HomeCarouselListSkeleton";
function HomeCarousalList({ next, carousalMovies }) {
    return (_jsxs("div", { children: [_jsx("h1", { className: "font-bold text-xl text-yellow-500", children: "Up Next" }), _jsx("div", { className: "row", children: carousalMovies.length > 0 ? (next.map((item, index) => (_jsx(HomeCarousalCard, { movies: carousalMovies, item: item, index: index }, index)))) : ([...Array(3)].map((item) => (_jsx(HomeCarouselListSkeleton, {})))) })] }));
}
export default HomeCarousalList;
