import React from 'react';
import ajust from '../../Photos/IMG-20220419-WA0000.jpg';
import pied from '../../Photos/IMG-20220419-WA0001.jpg';


export function PhotosVinyassa() {
  return (
    <div className='images'>
      <img src={ajust} alt='' id='ajust' />
      <img src={pied} alt='' id='pied' />
    </div>
  )
}