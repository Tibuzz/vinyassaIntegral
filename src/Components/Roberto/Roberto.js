import './Roberto.css';
import cascade from './roberto.webp';
import chien from '../../Photos/IMG-20220419-WA0005.jpg';
import assis from '../../Photos/IMG-20220419-WA0010.jpg';

export function Roberto() {
  return (
    <div className='roberto' id="roberto">
      <h2 className='title'>Roberto Partida</h2>
      <p>Roberto Partida(México) – Maestro de Vinyasa Yoga (E-RYT, YACEP), licenciado en Filosofía –
        Ha prácticado y estudiado con numerosos maestros por todo el mundo, probando e incorporando a su práctica diferentes estilos.
        Alumno de Lygia Lima (Brasil); Sashikala (Mysore- India); María Sánchez (México).
        Su sistema de Vinyasa Yoga (integral) sintetiza la utilización de instrumentos de apoyo para una práctica precisa,
         al mismo tiempo que propone una práctica dinámica y energética.</p>
      <div className='images'>
        <img src={cascade} alt='' id='cascade' />
        <img src={chien} alt='' id='chien' />
        <img src={assis} alt='' id='assis' />
      </div>
    </div>
    
  )
}