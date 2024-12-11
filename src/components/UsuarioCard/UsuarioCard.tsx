import { Usuario } from "../../types";
import { Link } from "react-router-dom";
import noAvatar from "../../assets/noavatar.png";

interface Props {
  usuario: Usuario;
}

export const UsuarioCard = ({ usuario }: Props) => {
  return (
    <Link to={`/usuario/${usuario.username}`}>
      <article className="flex flex-col items-center gap-2 border-2 border-stone-900 p-4 hover:border-sky-800 h-[260px]">
        <img src={usuario.urlAvatar || noAvatar} alt="" className="rounded-full w-32 h-32 object-cover border border-stone-800"/>
        <span className="text-lg font-bold">{usuario.username}</span>
        <span className="text-sm  text-center text-medium text-stone-400">{usuario.title || " "}</span>
        <div> </div>
      </article>
    </Link>
  );
};
