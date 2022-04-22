import React from 'react';

import cascade from '../../Photos/IMG-20220419-WA0013.jpg';
import bras from '../../Photos/IMG-20220419-WA0003.jpg';
import ajust2 from '../../Photos/IMG-20220419-WA0008.jpg';
import ajust3 from '../../Photos/IMG-20220419-WA0009.jpg';
import group from '../../Photos/IMG-20220419-WA0012.jpg';

export function Agenda() {
  return (
    <div className='agenda' id='agenda'>
      <h2>Proximos Intensivos</h2>
      <div className='images'>
        <img src={cascade} alt='' id='cascade'/>
      </div>
      <div className='cursos'>
        <h4>May 8, 2022 Vinyasa Integral Teacher Training, SCLC, Chiapas </h4>
        <h4>May, 2022 Más allá de la postura. Diplomado. Paz creativa. SCLC, Chiapas </h4>
        <h4>June 21, Surya Retreat, SCLC, Chiapas.</h4>
      </div>
      <div className='images'>
        <img src={bras} alt='' id='bras' />
        <img src={ajust2} alt='' id='ajust2' />
        <img src={ajust3} alt='' id='ajust3' />
        <img src={group} alt='' id='group' />
      </div>
    </div>
  )
}