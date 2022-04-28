import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
      <div className='logos'>
        <FontAwesomeIcon icon={faWhatsapp} size='2xl' title='Whatsapp' />
        <FontAwesomeIcon icon={faAt} size='2xl'title='Email' />
        <FontAwesomeIcon icon={faPhoneFlip} size='2xl' title='Phone' />
      </div>
    </footer>
  )
}
