import React from "react";

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Handlik from "./pages/Handlik/Handlik";
import Depex from "./pages/Depex/Depex";
import OObci from "./pages/OObci/OObci";
import Sluzby from "./pages/Sluzby/Sluzby"

import Foto from "./pages/Foto/Foto";
import Historie from "./pages/Historie/Historie";
import Mapa from "./pages/Mapa/Mapa";
import Rekreace from "./pages/Rekreace/Rekreace";
import Cile from "./pages/Cile/Cile";
import Restaurace from "./pages/Restaurace/Restaurace";
import Ubytovani from "./pages/Ubytovani/Ubytovani";




export default function AppRoutes() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/handlik" element={<Handlik></Handlik>} />
                    <Route path="/Depex" element={<Depex></Depex>} />
                    <Route path="/OOBci" element={<OObci></OObci>} />


                    <Route path="/Fotogalerie" element={<Foto></Foto>} />
                    <Route path="/Historie" element={<Historie></Historie>} />
                    <Route path="/Mapa" element={<Mapa></Mapa>} />
                    <Route path="/Rekreace" element={<Rekreace></Rekreace>} />
                    <Route path="/Cile" element={<Cile></Cile>} />
                    <Route path="/Restaurace" element={<Restaurace></Restaurace>} />
                    <Route path="/Ubytovani" element={<Ubytovani></Ubytovani>} />


                    <Route path="/Sluzby" element={<Sluzby></Sluzby>} />

                </Routes>
            </BrowserRouter>
        </>

    )

}