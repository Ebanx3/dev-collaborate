import { useUserContext } from "@hooks/useUserContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import { CrearCuentaForm } from "@components";

export const CrearCuenta = () => {
    const nav = useNavigate();
    const { user } = useUserContext();

    useEffect(()=>{
        if(user != null){
            nav("/");
        }
    },[])

    return( <main className="max-w-[1024px] m-auto text-stone-200 flex flex-col justify-center items-center h-[calc(100vh-160px)]">
        <CrearCuentaForm />
        <span className="text-sm mt-4 text-stone-200">Ya tienes una cuenta?</span>
        <Link to="/ingresar" className="text-sm text-cyan-400 font-bold hover:text-cyan-200">INGRESA</Link>
      </main>)
}