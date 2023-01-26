import {Route, Routes, Navigate } from "react-router-dom";
import About from "../About";
import React, {} from "react";
import HomePage from "../HomePage";
import NotFoundComponent from "../NotFoundComponent";
import AdminHome from "../Admin/AdminHome";
import Resume from "../Resume";
import PortfolioObjectPage from "../PortfolioObjectPage";
import PortfolioMainPage from "../PortfolioMainPage";
import ArticlesMainPage from "../ArticleMainPage";
import Article from "../Article";

const AppRouter= () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PortfolioMainPage/>} />
            <Route path="/portfolio/:portfolioId" element={<PortfolioObjectPage/>} />
            <Route path="/articles" element={<ArticlesMainPage/>} />
            <Route path="/articles/:articleId" element={<Article/>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/not-found" element={<NotFoundComponent />} />
            <Route path="*" element={<Navigate to="/not-found" />}/>
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