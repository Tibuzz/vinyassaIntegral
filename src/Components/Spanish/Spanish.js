import React from 'react';
import Navbar from './Navbar';
import { VinyassaIntegral } from './VinyassaIntegral';
import { PhotosVinyassa } from '../PhotosVinyassa/PhotosVinyassa';
import { Roberto } from './Roberto';
import { PhotosRoberto } from '../PhotosRoberto/PhotosRoberto';
import { Agenda } from './Agenda';
import { Comentarios } from './Comentarios';
import { Contacto } from './Contacto';

export function Spanish() {
  return (
    <div>
    <Navbar />
    <VinyassaIntegral />
    <PhotosVinyassa />
    <Roberto />
    <PhotosRoberto />
    <Agenda />
    <Comentarios />
    <Contacto />
    </div>
  )
}