import React from 'react'
import '../Fotkaa/Fotkaa.css'

export default function Fotkaa( {image} ) {
  return (
    <>
    <div className='galeryImg1' style={{ backgroundImage: `url(${image})` }}  ></div>
    </>
  )
}
