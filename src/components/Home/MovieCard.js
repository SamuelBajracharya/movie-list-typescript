import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { img } from "../../utils/constant";
function MovieCard({ movieCard }) {
    return (_jsx(Link, { to: `/details/${movieCard.id}`, children: _jsx("div", { className: "col my-4", children: _jsxs("div", { className: " group border-2 border-zinc-800 rounded-lg overflow-hidden hover:scale-105 duration-100 cursor-pointer", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: img + movieCard.poster_path, alt: "posters", className: "aspect-[3/4]" }), _jsx("div", { className: "absolute bottom-0 w-full h-50 carousalGradient" })] }), _jsxs("div", { className: "bg-[#222] p-2", children: [_jsx("h1", { className: "md:text-[18px] text-[16px] font-semibold line-clamp-1 mb-2 group-hover:underline", children: movieCard.title }), _jsxs("div", { className: "md:text-[16px] text-sm text-zinc-300", children: [_jsxs("h2", { children: ["Rating: ", String(movieCard.vote_average).substring(0, 3)] }), _jsxs("h2", { children: ["Language: ", movieCard.original_language] }), _jsxs("h2", { children: ["Release: ", movieCard.release_date] })] })] })] }) }) }));
}
export default MovieCard;
