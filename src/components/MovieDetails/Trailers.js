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
import { baseApi } from "../../api/axiosInstance";
import YouTube from "react-youtube";
function Trailers({ movieId }) {
    const [trailers, settrailers] = useState([]);
    const FetchTrailers = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield baseApi(`/3/movie/${movieId}/videos?language=en-US`);
            const data = response.data.results;
            const trailerObj = data.filter((result) => result.type == "Trailer");
            settrailers(trailerObj);
        }
        catch (error) {
            console.log("Trailer Fetch error: ", error);
        }
    });
    useEffect(() => {
        FetchTrailers();
    }, [movieId]);
    const opts = {
        height: "230",
        width: "350",
    };
    return (_jsx("div", { children: trailers.length > 0 && (_jsxs("div", { className: "w-[90%] mx-auto my-28", children: [_jsx("h1", { className: "md:text-3xl sm:2xl text-xl text-yellow-500 font-bold", children: "Watch Trailers" }), _jsx("div", { className: "flex flex-wrap gap-4 lg:justify-start justify-center", children: trailers.map((link, index) => (_jsxs("div", { className: "flex flex-col gap-4 mt-4", children: [_jsx(YouTube, { videoId: link.key, opts: opts }), _jsx("h1", { className: "md:text-xl sm:text-lg text-md w-[380px] px-2", children: link.name })] }, index))) })] })) }));
}
export default Trailers;
