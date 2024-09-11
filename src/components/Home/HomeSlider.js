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
import HomeCarousal from "./HomeCarousal";
import HomeCarousalList from "./HomeCarousalList";
import HomeCarouselSkeleton from "../skeleton/HomeCarouselSkeleton";
function HomeSlider() {
    const [carousalMovies, setCarousalMovies] = useState([]);
    const [selected, setSelected] = useState(0);
    const [next, setNext] = useState([]);
    useEffect(() => {
        if (carousalMovies.length) {
            const index1 = (selected + 1) % carousalMovies.length;
            const index2 = (selected + 2) % carousalMovies.length;
            const index3 = (selected + 3) % carousalMovies.length;
            setNext([index1, index2, index3]);
        }
    }, [carousalMovies, selected]);
    const slideHandler = (e) => {
        const event = e;
        setSelected(event.to);
    };
    useEffect(() => {
        const myCarousal = document.getElementById("carouselExample");
        if (myCarousal) {
            myCarousal.addEventListener("slid.bs.carousel", slideHandler);
            return () => {
                myCarousal.removeEventListener("slid.bs.carousel", slideHandler);
            };
        }
    });
    const fetchUpcoming = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield baseApi.get("/3/movie/upcoming?language=en-US&page=1");
            setCarousalMovies(response.data.results);
        }
        catch (err) {
            console.log("Fetch upcoming data error", err);
        }
    });
    useEffect(() => {
        fetchUpcoming();
    }, []);
    return (_jsxs("div", { className: "row my-6", children: [_jsx("div", { className: "relative col-xl-8", children: carousalMovies.length > 0 ? (_jsxs("div", { id: "carouselExample", className: "carousel slide h-full", children: [_jsx(HomeCarousal, { carousalMovies: carousalMovies }), _jsxs("button", { className: "carousel-control-prev", type: "button", "data-bs-target": "#carouselExample", "data-bs-slide": "prev", children: [_jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), _jsx("span", { className: "visually-hidden", children: "Previous" })] }), _jsxs("button", { className: "carousel-control-next", type: "button", "data-bs-target": "#carouselExample", "data-bs-slide": "next", children: [_jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), _jsx("span", { className: "visually-hidden", children: "Next" })] })] })) : (_jsx(HomeCarouselSkeleton, {})) }), _jsx("div", { className: "col-xl-4 lg:block hidden", children: _jsx(HomeCarousalList, { next: next, carousalMovies: carousalMovies }) })] }));
}
export default HomeSlider;
