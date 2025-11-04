import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import ProfilePage from "../pages/ProfilePage";
import NewTaskPage from "../pages/NewTaskPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/new-task" element={<NewTaskPage />} />

            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes;