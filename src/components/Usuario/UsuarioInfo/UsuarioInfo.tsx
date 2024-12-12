import { Usuario } from "types";
import { EditUsuarioInfo } from "./EditUsuarioInfo";
import { useState } from "react";
import { ConfirmCancelEditButtons } from "./ConfirmCancelEditButtons";
import { updateUser } from "@api/updateUser";

interface Props {
  usuario: Usuario;
  sameUser: boolean;
  setUser: (u:Usuario)=>void;
}

export const UsuarioInfo = ({ usuario, sameUser,setUser }: Props) => {
  const [editingUserInfo, setEditingUserInfo] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState(usuario.title || undefined);
  const [description, setDescription] = useState(usuario.description || undefined);
  const [technologies, setTechnologies] = useState( usuario.technologies ?  usuario.technologies.join(",") : undefined)

  const handleConfirmChanges = async () => {
    const body: {
      title?: string;
      description?: string;
      technologies?: string[];
    } = {};
    if (usuario.title != title) body.title = title;
    if (usuario.description != description) body.description = description;
    if (technologies && usuario.technologies.join(",") != technologies.toUpperCase())
      body.technologies = technologies.toUpperCase().split(",");

    console.log(body)

    if(Object.keys(body).length == 0){
      setEditingUserInfo(false);
      return;
    }
    setIsLoading(true);
    const response = await updateUser(body)
    if("error" in response){
      setEditingUserInfo(false);
      return;
    }
    
    setEditingUserInfo(false);
    setUser({...usuario, ...body});
    setIsLoading(false);
  };

  return (
    <article
      className={`p-4 flex flex-col gap-2 relative flex-1 bg-black ${sameUser && "group hover:outline outline-1 outline-stone-800"} ${isLoading && "spinner"}`}
    >
      <div>
        <h1 className="text-2xl font-bold">{usuario.username}</h1>
        {editingUserInfo ? (
          <input
            type="text"
            placeholder="título..."
            className="bg-black outline  outline-stone-900 w-full focus:outline-cyan-700 text-sm p-[2px] text-stone-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h2 className="text-l font-bold  text-stone-300">
            {usuario.title ?? "Sin título"}
          </h2>
        )}
      </div>

      {editingUserInfo ? (
        <textarea
          rows={5}
          className=" mt-2 resize-none bg-black outline outline-stone-900 w-full focus:outline-cyan-700 text-sm p-[2px] text-stone-300"
          placeholder="descripción..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      ) : (
        <p className="text-stone-400 text-sm mt-2 line-clamp-6 whitespace-pre-line">
          {usuario.description ?? "Sin descripción"}
        </p>
      )}
      <div className="mt-auto">
        <h3 className="text-stone-300">Tecnologías</h3>
        {editingUserInfo ? (
          <input
            type="text"
            className="bg-black outline outline-stone-900 w-full focus:outline-cyan-700 text-sm p-[2px] text-stone-300"
            placeholder="HTML,CSS,JAVASCIRPT... (tecnologías separadas por ',')"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
        ) : (
          <>
            {technologies == "" && (
              <span className="text-sm text-stone-500 h-[24px]">
                No hay tecnologías
              </span>
            )}
            {technologies && technologies.split(",").map((tech) => (
              <span className="border border-stone-500 font-medium text-stone-500 mx-1 text-xs py-1 px-2 rounded-full" key={tech}>{tech}</span>
            ))}
          </>
        )}
      </div>
      {sameUser && !editingUserInfo && (
        <EditUsuarioInfo setEditUserInfo={() => setEditingUserInfo(true)} />
      )}
      {sameUser && editingUserInfo && (
        <ConfirmCancelEditButtons
          setEditUserInfo={() => setEditingUserInfo(false)}
          confirmChangesMethod={handleConfirmChanges}
        />
      )}
    </article>
  );
};
