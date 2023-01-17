import {Route, Routes, Navigate } from "react-router-dom";
import About from "../components/About";
import React, {} from "react";
import Resume from "../components/Resume/Resume";
import NotFound from "../components/NotFound";
import AdminHome from "../components/Admin/AdminHome";
import HomePage from "../components/Home";

const AppRouter= () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />

            {/* <Route path="/projects" component={Projects} /> */}
            {/* <Route path="/contacts" component={ContactMe} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
    );
};

const AdminRouter= () => {
    return (
        <Routes>
            <Route path="/" element={<AdminHome />} />
        </Routes>
    );
};


export {AdminRouter,AppRouter}