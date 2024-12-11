import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "@hooks/";
import { PrimaryButton } from "@components";


export const Navbar = () => {
  const { user } = useUserContext();
  const nav = useNavigate();

  return (
    <nav className="text-stone-300 font-medium text-sm flex gap-4 justify-end px-6 py-4 items-center">
      <NavLink
        to={"/"}
        className={({isActive}) =>
          isActive ? "text-stone-600 cursor-default" : "hover:text-stone-50"
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to={"/proyectos"}
        className={({isActive}) =>
          isActive ? "text-stone-600 cursor-default" : "hover:text-stone-50"
        }
      >
        Proyectos
      </NavLink>
      <NavLink
        to={"/publicaciones"}
        className={({isActive}) =>
          isActive ? "text-stone-600 cursor-default" : "hover:text-stone-50"
        }
      >
        Publicaciones
      </NavLink>
      <NavLink
        to={"/usuarios"}
        className={({isActive}) =>
          isActive ? "text-stone-600 cursor-default" : "hover:text-stone-50"
        }
      >
        Usuarios
      </NavLink>
        {user ? <span>{user.username}</span> : <PrimaryButton label="Ingresar" onClickMethod={()=> nav("/ingresar")}/>}
    </nav>
  );
};
