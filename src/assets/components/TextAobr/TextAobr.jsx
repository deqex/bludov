import React from 'react'
import './TextAobr.css'

export default function TextAobr({ text, image }) { // Correctly destructure the props
  return (
    <div className='TextAobr_main'>
      <div className='TextAobr_text'>
        {text}
      </div>
      <div className='TextAobr_obr' style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  )
}
