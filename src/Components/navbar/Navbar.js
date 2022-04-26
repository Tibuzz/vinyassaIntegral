import { Routes, Route } from "react-router-dom";
import { NavbarSpa } from "./NavbarSpa";
import { NavbarEng } from "./NavbarEng";

export function Navbar() {

  return (
    <Routes>
      <Route path='/' element={<NavbarSpa />} />
      <Route path='/en' element={<NavbarEng />} />
    </Routes>
  )
}