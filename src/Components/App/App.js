import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { VinyassaIntegral } from '../VinyassaIntegral/VinyassaIntegral';
import { Roberto } from '../Roberto/Roberto';
import { Agenda } from '../Agenda/Agenda';
import { Comentarios } from '../Comentarios/Comentarios';

import { AddComment } from '../AddComment/AddComment';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <VinyassaIntegral />
      <Roberto />
      <Agenda />
      <Comentarios />
     
    </div>
  );
}

