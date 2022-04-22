import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Photos/logos/logo_vinyassa.jpg';
import engFlag from '../../Photos/logos/united-states.png';

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#vinyassa">Sobre Vinyassa Integral</a></li>
          <li><a href="#roberto">Sobre Roberto</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#comentarios">Comentarios</a></li>
          <li><a href='#contacto'>Contacto</a></li>
          <li><Link to="/en"><img src={engFlag} alt='Link to english version' className='flag' title='English version'></img></Link></li>
        </ul>
      </nav>
    </header>
  )
}