import './Kys.css'
import React from 'react'
import ActualButton from '../ActualButton/ActualButton';

export default function Kys() {
  return (
    <>
        <div className='Kys-container'>
            <div className='Kys-img'>

            </div>
            <div className='Kys-text'>
                <div className='Kys-title'>Lekarna Bludov</div>
                <div className='Kys-description'>Email: info@bludov.cz <br/> Telefon: 777 420 169</div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}