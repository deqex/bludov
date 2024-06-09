import './Kys.css'
import React from 'react'
import ActualButton from '../ActualButton/ActualButton';

export default function Kys(kkt) {
  return (
    <>
        <div className='Kys-container'>
            <div className='Kys-img'>

            </div>
            <div className='Kys-text'>
                <div className='Kys-title'>{kkt.title}</div>
                <div className='Kys-description'>
                  Email: {kkt.email} 
                  <br/> 
                  Telefon: {kkt.tel}
                </div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}