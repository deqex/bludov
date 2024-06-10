import React from 'react'
import './TextAobr.css'

export default function TextAobr({ text, image }) { 
  return (
    <div className='TextAobr_main'>
      <div className='TextAobr_text'>
        {text}
      </div>
      <div className='TextAobr_obr' style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  )
}
