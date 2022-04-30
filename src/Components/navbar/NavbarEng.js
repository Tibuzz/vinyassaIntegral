import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Photos/logos/logo_vinyassa.jpg';
import mexFlag from '../../Photos/logos/mexican-flag.png';


export function NavbarEng() {

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#vinyassa">About Vinyasa Integral</a></li>
          <li><a href="#roberto">About Roberto</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#comentarios">Comments</a></li>
          <li><a href='#contacto'>Contact</a></li>
          <li><Link to='/'><img src={mexFlag} alt='Link to english version' className='flag' title='Spanish version'></img></Link></li>
        </ul>
      </nav>
      <Link to='/' className='flagMobile'><img src={mexFlag} alt='Link to english version' className='flag' title='Spanish version'></img></Link>
    </header>
  )
}