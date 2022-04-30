import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContactTitulo } from './ContactTitulo';
import { ContactTitle } from './ContactTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export function Contact() {
  return (

    <footer className='contacto' id='contacto'>
      <Routes>
        <Route path='/' element={<ContactTitulo />} />
        <Route path='/en' element={<ContactTitle />} />
      </Routes>
      <ul className='logos'>
        <li><a href='https://wa.me/393515292420' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faWhatsapp} size='2xl' title='Whatsapp: +39 351 529 2420' /></a></li>
        <li><a href='mailto:roberto.partida@gmail.com?subject=Vinyasa Integral' ><FontAwesomeIcon icon={faAt} size='2xl' title='Email: roberto.partida@gmail.com' /></a></li>
        <li><a href='tel:+526646116374'><FontAwesomeIcon icon={faPhoneFlip} size='2xl' title='Phone: +52 664 611 63 74' /></a></li>
      </ul>
    </footer>
  )
}
