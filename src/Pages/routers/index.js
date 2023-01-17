import {Route, Routes, Navigate } from "react-router-dom";
import About from "../About";
import React, {} from "react";
import Resume from "../../components/Resume/Resume";
import HomePage from "../HomePage";
import NotFoundComponent from "../NotFoundComponent";
import AdminHome from "../Admin/AdminHome";

const AppRouter= () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/not-found" element={<NotFoundComponent />} />
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