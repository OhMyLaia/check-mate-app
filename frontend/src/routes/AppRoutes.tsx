import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import ProfilePage from "../pages/ProfilePage";
import NewTaskPage from "../pages/NewTaskPage";
import RegisterPage from "../pages/RegisterPage";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<DashboardPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/new-task" element={<NewTaskPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes;