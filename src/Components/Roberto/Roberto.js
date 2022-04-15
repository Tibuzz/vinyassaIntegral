import './Roberto.css';
import roberto from './roberto.webp';

export function Roberto() {
  return (
    <div className='roberto'>
      <h2 className='title'>Roberto Partida</h2>
      <p>Roberto Partida(México) – Maestro de Vinyasa Yoga (E-RYT, YACEP), licenciado en Filosofía –
        Ha prácticado y estudiado con numerosos maestros por todo el mundo, probando e incorporando a su práctica diferentes estilos.
        Alumno de Lygia Lima (Brasil); Sashikala (Mysore- India); María Sánchez (México).
        Su sistema de Vinyasa Yoga (integral) sintetiza la utilización de instrumentos de apoyo para una práctica precisa,
         al mismo tiempo que propone una práctica dinámica y energética.</p>
      <img src={roberto} alt='' id='robertoCascade' />
    </div>
  )
}