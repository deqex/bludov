import React from "react";

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Handlik from "./pages/Handlik/Handlik";


export default function AppRoutes() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/handlik" element={<Handlik></Handlik>} />
                </Routes>
            </BrowserRouter>
        </>

    )

}