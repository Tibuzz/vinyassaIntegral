import './Contacto.css';
import whatsapp from './whatsapp.png';

export function Contacto() {
  return (

    <footer className='contacto' id='contacto'>
      <h2>Contacto</h2>
      <a href='https://api.whatsapp.com/send?phone=+393515292420' target='_blank' rel='noreferrer'><img src={whatsapp} alt='whastapp logo'/></a>
      </footer>
  )
}
