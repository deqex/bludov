import React from 'react'
import './Place.css';
import ActualButton from '../ActualButton/ActualButton';

export default function Place(pls) {
  return (
    <>
        <div className='place-container'>
            <div className='place-img'>

            </div>
            <div className='place-text'>
                <div className='place-title'>{pls.name}</div>
                <div className='place-description'>
                Email: {pls.email}
                <br/>
                Telefon: {pls.telefon}

                </div>
                <div className='place-text2'>{pls.text}</div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}
