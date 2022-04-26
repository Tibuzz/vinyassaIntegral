import { Routes, Route } from "react-router-dom";
import { RobertoEng } from "./RobertEng";
import { RobertoSpa } from "./RobertoSpa";


export const Roberto = () => {
  return (
    <Routes>
      <Route path="/" element={<RobertoSpa />} />
      <Route path="/en" element={<RobertoEng />} />
    </Routes>
  )
}