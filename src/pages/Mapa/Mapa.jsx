import React from 'react'
import '../Mapa/Mapa.css';
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo';
import Iframe from 'react-iframe';
export default function Mapa() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <Iframe url="https://frame.mapy.cz/s/cutacamuro"

        className="mapa"
        display="block"
        position="relative"/>

    </div>
  )
}