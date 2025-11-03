import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes;