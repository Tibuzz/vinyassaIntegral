
import logo from './logo_vinyassa.jpg';
import './Navbar.css';

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
          <li><a href="#comentarios">Comentarios</a></li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  )
}