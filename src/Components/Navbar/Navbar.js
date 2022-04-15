import logo from './logo_vinyassa.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <navbar className="navbar">
        <ul>
          <li>Sobre Vinyassa Integral</li>
          <li>Sobre Roberto</li>
          <li>Comentarios</li>
          <li>Contacto</li>
        </ul>
      </navbar>
    </header>
  )
}