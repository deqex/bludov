import React from 'react'
import '../Mapa/Mapa.css';
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo';
import Iframe from 'react-iframe';
export default function Mapa() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <Iframe url="https://mapy.cz/zakladni?source=muni&id=170&ds=1&x=16.9239537&y=49.9423768&z=13"
        
        className="mapa"
        display="block"
        position="relative"/>

    </div>
  )
}
