import React from 'react'
import './Place.css';
import ActualButton from '../ActualButton/ActualButton';

export default function Place() {
  return (
    <>
        <div className='place-container'>
            <div className='place-img'>

            </div>
            <div className='place-text'>
                <div className='place-title'>Lekarna Bludov</div>
                <div className='place-description'>Email: info@bludov.cz <br/> Telefon: 777 420 169</div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}
