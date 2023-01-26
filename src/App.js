import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { getApp } from "./utils/helpers";
import './static/css/main.scss'; //for all the css to avoid singe component imports
import Main from "./layouts/Main";

const App =()=> {
    const CurrentApp = getApp();
    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={<Main />}>
                    <CurrentApp />
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
