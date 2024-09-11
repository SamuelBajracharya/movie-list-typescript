import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
    return (_jsx("div", { className: "", children: _jsxs(BrowserRouter, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/movies", element: _jsx(Movies, {}) }), _jsx(Route, { path: "/details/:id", element: _jsx(Details, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] })] }) }));
}
export default App;
