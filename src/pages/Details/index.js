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
import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { useEffect, useState } from "react";
import { img } from "../../utils/constant";
import Trailers from "../../components/MovieDetails/Trailers";
import SimilarMovies from "../../components/MovieDetails/SimilarMovies";
import DetailsSkeleton from "../../components/skeleton/DetailsSkeleton";
function Details() {
    var _a;
    const params = useParams();
    const [details, setDetails] = useState();
    const fetchDetails = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield baseApi.get(`/3/movie/${params.id}?language=en-US`);
            setDetails(response.data);
        }
        catch (error) {
            console.log("Movie Details error: ", error);
        }
    });
    useEffect(() => {
        fetchDetails();
    }, [params]);
    return (_jsx("div", { children: details && params.id ? (_jsxs("div", { className: "relative w-full h-fit", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: img + (details === null || details === void 0 ? void 0 : details.backdrop_path), alt: "detailsbackdrop", className: "opacity-40 w-full min-h-[500px] aspect-[7/4] object-cover" }), _jsx("div", { className: "absolute w-full h-full bottom-0 carousalGradient" })] }), _jsxs("div", { className: "absolute top-0 w-full pb-28", children: [_jsxs("div", { className: "lg:flex w-[90%] mx-auto xl:mt-[630px] lg:mt-[500px] md:mt-[400px] sm:mt-[300px] mt-[180px]  gap-8", children: [_jsx("img", { src: img + (details === null || details === void 0 ? void 0 : details.poster_path), alt: "poster", className: "xl:w-[350px] lg:w-[300px] md:[250px] sm:w-[230px] w-[200px] h-fit aspect-[4/6]" }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("h1", { className: "xl:text-6xl lg:text-5xl md:text-4xl text-3xl", children: [details === null || details === void 0 ? void 0 : details.title, _jsxs("span", { className: " italic text-zinc-500 lg:text-4xl md:text-3xl text-2xl px-2", children: ["(", String(details === null || details === void 0 ? void 0 : details.release_date).substring(0, 4), ")"] })] }), _jsxs("div", { className: "lg:text-xl md:text-lg sm:text-md text-sm text-slate-300 mt-4", children: [_jsx("h2", { children: details === null || details === void 0 ? void 0 : details.tagline }), _jsx("h2", { children: details === null || details === void 0 ? void 0 : details.overview }), _jsxs("div", { className: "mt-4 flex flex-col gap-3", children: [_jsxs("h2", { children: ["Genre:", " ", (_a = details === null || details === void 0 ? void 0 : details.genres) === null || _a === void 0 ? void 0 : _a.map((item) => item.name).join(", ")] }), _jsxs("h2", { children: ["Rating: ", String(details === null || details === void 0 ? void 0 : details.vote_average).substring(0, 3)] }), _jsxs("h2", { children: ["Original Language: ", details === null || details === void 0 ? void 0 : details.original_language] }), _jsxs("h2", { children: ["Release Date: ", details === null || details === void 0 ? void 0 : details.release_date] })] })] })] })] }), _jsx(Trailers, { movieId: String(params.id) }), _jsx(SimilarMovies, { movieId: String(params.id) })] })] })) : (_jsx(DetailsSkeleton, {})) }));
}
export default Details;
