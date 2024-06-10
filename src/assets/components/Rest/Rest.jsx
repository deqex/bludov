import React from 'react'
import './Rest.css';
import ActualButton from '../ActualButton/ActualButton';

export default function rest({name, email, telefon, text, image}) {
  return (
    <>
        <div className='rest-container'>
            <div className='rest-img'>
            <img className='rest-imgfr' src={image} alt="gg posrals to" />
            </div>
            <div className='rest-text'>
                <div className='rest-title'>{name}</div>
                <div className='rest-description'>
                {email}
                <br/>
                {telefon}

                </div>
                <div className='rest-text2'>
                  Po: 7:30 - 18:00 <br />
                  Út: 7:30 - 18:00 <br />
                  St: 7:30 - 18:00 <br />
                  Čt: 7:30 - 18:00 <br />
                  Pá: 7:30 - 18:00 <br />
                  So: 10:00 - 18:00 <br />
                  Ne: 10:00 - 18:00 <br />
                </div>
                <ActualButton></ActualButton>
            </div>
        </div>
    </>
  )
}
