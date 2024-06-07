import React from 'react'
import './Place.css';
import ActualButton from '../ActualButton/ActualButton';

export default function Place({name, email, telefon, text, image}) {
  return (
    <>
        <div className='place-container'>
            <div className='place-img' style={{backgroundImage: `url(${image})`}}>

            </div>
            <div className='place-text'>
                <div className='place-title'>{name}</div>
                <div className='place-description'>
                Email: {email}
                <br/>
                Telefon: {telefon}

                </div>
                <div className='place-text2'>{text}</div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}
