import './Kys.css'
import React from 'react'
import ActualButton from '../ActualButton/ActualButton';

export default function Kys(kkt) {
  return (
    <>
        <div className='Kys-container'>
            <div className='Kys-img'>
              <img className='Kys-imgfr' src={kkt.src} alt="gg posrals to" />
            </div>
            <div className='Kys-text'>
                <div className='Kys-title'>{kkt.title}</div>
                <div className='Kys-description'>
                  {kkt.email} 
                  <br/> 
                  Kontakt: {kkt.tel}
                </div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}