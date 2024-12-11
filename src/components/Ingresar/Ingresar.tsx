import { IngresarForm } from "@components";
import { useUserContext } from "@hooks/useUserContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Ingresar = () => {
  const nav = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user != null) {
      nav("/");
    }
  }, []);

  return (
    <main className="max-w-[1024px] m-auto text-stone-200 flex flex-col justify-center items-center h-[calc(100vh-160px)]">
      <IngresarForm />
      <span className="text-sm mt-4 text-stone-200">No tienes una cuenta?</span>
      <Link to="/crear_cuenta" className="text-sm text-cyan-400 font-bold hover:text-cyan-200">CREA UNA</Link>
    </main>
  );
};
