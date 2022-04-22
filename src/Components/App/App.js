import React from 'react';
import './App.css';
import { Spanish } from '../Spanish/Spanish';
import { Routes, Route } from 'react-router-dom';

import { English } from '../English/English';


import { AddComment } from '../AddComment/AddComment';


export default function App() {
  return (
    
      <div className='App'>
        <div className='content'>
        <Routes>
          <Route path='/en' element={<English />} />
          <Route path='/' element={<Spanish />} />
        </Routes>
            
           
          
          
          
       
        </div>
      </div>
    
  );
}

