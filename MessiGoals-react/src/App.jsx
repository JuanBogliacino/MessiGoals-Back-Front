import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Equipo from "./pages/Equipo"
import Rival from "./pages/Rival"
import Competicion from "./pages/Competicion"
import Anio from "./pages/Anio"
import TipoDeGol from "./pages/TipoDeGol"
import MobileCategoria from "./pages/mobile/MobileCategoria"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipo/:id" element={<Equipo />} />
      <Route path="/rival/:id" element={<Rival />} />
      <Route path="/competicion/:id" element={<Competicion />} />
      <Route path="/anio/:id" element={<Anio />} />
      <Route path="/tipoDeGol/:id" element={<TipoDeGol />} />

      <Route path="/mobile/equipo" element={<MobileCategoria />} />
      <Route path="/mobile/competicion" element={<MobileCategoria />} />
      <Route path="/mobile/rival" element={<MobileCategoria />} />
      <Route path="/mobile/anio" element={<MobileCategoria />} />
      <Route path="/mobile/tipoDeGol" element={<MobileCategoria />} />
    </Routes>
  )
}

export default App