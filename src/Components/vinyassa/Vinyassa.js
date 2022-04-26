import { Routes, Route } from "react-router-dom";
import { VinyassaEng } from "./VinyassaEng";
import { VinyassaIntegral } from "./VinyassaIntegral";

export const Vinyassa = () => {
  return (
    <Routes>
      <Route path="/" element={<VinyassaIntegral />} />
      <Route path="/en" element={<VinyassaEng />} />
    </Routes>
  )
}