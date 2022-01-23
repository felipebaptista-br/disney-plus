import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Platform from "./Pages/Platform";


export default function Adresses() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/platform" element={<Platform />} />
            </Routes>
        </BrowserRouter>
    )
}