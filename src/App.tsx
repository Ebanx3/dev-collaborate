import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContextProvider";

import { Home } from "@components/Home/Home";
import { Navbar } from "@components/Navbar/Navbar";
import { Ingresar } from "@components/Ingresar/Ingresar";
import { Usuarios } from "@components/Usuarios/Usuarios";
import { CrearCuenta } from "@components/CrearCuenta/CrearCuenta";
import { Usuario } from "@components/Usuario/Usuario";
import { Proyectos } from "@components/Proyectos/Proyectos";
import { CrearProyecto } from "@components/CrearProyecto/CrearProyecto";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/crear_cuenta" element={<CrearCuenta />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/usuario/:username" element={<Usuario />} />

              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/crear_proyecto" element={<CrearProyecto />} />
              

              <Route path="/publicaciones" element={<>publicaciones</>} />
            </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
