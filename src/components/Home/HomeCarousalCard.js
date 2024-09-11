import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { img } from '../../utils/constant';
import { FiThumbsUp } from 'react-icons/fi';
function HomeCarousalCard({ movies, item, index }) {
    var _a, _b, _c, _d;
    return (_jsx("div", { className: 'col-xl-12 col', children: _jsxs(Link, { className: "group flex gap-3 my-8 ", to: `/details/${movies[item].id}`, children: [_jsx("img", { className: "w-[110px] cursor-pointer aspect-[5/7]", src: img + ((_a = movies[item]) === null || _a === void 0 ? void 0 : _a.poster_path), alt: "carousalListMovie" }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsx("h1", { className: "text-lg font-semibold group-hover:underline cursor-pointer", children: (_b = movies[item]) === null || _b === void 0 ? void 0 : _b.title }), _jsx("h1", { className: "text-md line-clamp-3 text-zinc-400", children: (_c = movies[item]) === null || _c === void 0 ? void 0 : _c.overview }), _jsxs("div", { className: "flex items-center gap-1 text-zinc-400 text-md", children: [_jsx(FiThumbsUp, {}), _jsx("h1", { children: (_d = movies[item]) === null || _d === void 0 ? void 0 : _d.vote_count })] })] })] }) }));
}
export default HomeCarousalCard;
