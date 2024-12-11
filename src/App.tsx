import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar, Ingresar, Usuarios, CrearCuenta,Usuario, Proyectos, CrearProyecto } from "@components";
import { UserContextProvider } from "./contexts/UserContextProvider";

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
