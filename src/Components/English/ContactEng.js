import React from 'react';
import whatsapp from '../../Photos/logos/whatsapp.png';

export function ContactEng() {
  return (

    <footer className='contacto' id='contacto'>
      <h2>Contact</h2>
      <a href='https://api.whatsapp.com/send?phone=+393515292420' target='_blank' rel='noreferrer'><img src={whatsapp} alt='whastapp logo' /></a>
    </footer>
  )
}