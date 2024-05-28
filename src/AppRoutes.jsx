import React from "react";

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Handlik from "./pages/Handlik/Handlik";
import Depex from "./pages/Depex/Depex";
import OObci from "./pages/OObci/OObci";



export default function AppRoutes() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/handlik" element={<Handlik></Handlik>} />
                    <Route path="/Depex" element={<Depex></Depex>} />
                    <Route path="/OOBci" element={<OObci></OObci>} />
                </Routes>
            </BrowserRouter>
        </>

    )

}