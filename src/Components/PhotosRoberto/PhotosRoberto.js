import React from 'react';
import cascade from '../../Photos/roberto.webp';
import chien from '../../Photos/IMG-20220419-WA0005.jpg';
import assis from '../../Photos/IMG-20220419-WA0010.jpg';

export function PhotosRoberto() {
  return (
    <div className='images'>
      <img src={cascade} alt='' id='cascade' />
      <img src={chien} alt='' id='chien' />
      <img src={assis} alt='' id='assis' />
    </div>
  )
}