import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function MovieCardSkeleton() {
    return (_jsx("div", { className: "col my-4 placeholder-glow", children: _jsxs("div", { className: "border-2 border-zinc-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "relative", children: _jsx("div", { className: "aspect-[3/4] placeholder w-full" }) }), _jsxs("div", { className: "bg-[#222] p-2", children: [_jsx("h1", { className: "md:text-[18px] text-[16px] font-semibold mb-2 w-[30%] placeholder" }), _jsxs("div", { className: "md:text-[16px] text-sm", children: [_jsx("h2", { className: "placeholder w-[50%]" }), _jsx("h2", { className: "placeholder w-[80%]" }), _jsx("h2", { className: "placeholder w-[60%]" })] })] })] }) }));
}
export default MovieCardSkeleton;
