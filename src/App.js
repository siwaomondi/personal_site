import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { AppRouter } from "./routers/index";
import { getApp, getSubDomain } from "./utils/helpers";

function App() {
    const CurrentApp = getApp();
    return (
        <div className="App">
            <BrowserRouter>
                <CurrentApp />
            </BrowserRouter>
        </div>
    );
}

export default App;
