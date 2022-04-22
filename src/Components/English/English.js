import React from "react";
import { NavbarEng } from "./NavbarEng";
import { VinyassaEng } from "./VinyassaEng";
import { PhotosVinyassa } from "../PhotosVinyassa/PhotosVinyassa";
import { RobertoEng } from "./RobertEng";
import { PhotosRoberto } from "../PhotosRoberto/PhotosRoberto";
import { Agenda } from "../Spanish/Agenda";
import { CommentsEng } from "./CommentsEng";
import { ContactEng } from "./ContactEng";

export function English() {

  return (
    <div>
      <NavbarEng />
      <VinyassaEng />
      <PhotosVinyassa />
      <RobertoEng />
      <PhotosRoberto />
      <Agenda />
      <CommentsEng />
      <ContactEng />
    </div>
  )
}