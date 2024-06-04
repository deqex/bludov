import React from 'react'
import './TextAobr.css'

export default function TextAobr(yap) {
  return (
    <div className='TextAobr_main'>
      <div className='TextAobr_text'>
        {yap.text}
      </div>
      <div className='TextAobr_obr'></div>
    </div>
  )
}
