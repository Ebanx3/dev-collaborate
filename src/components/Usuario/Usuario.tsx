import { useFetch } from "@hooks/useFetch";
import { useUserContext } from "@hooks/useUserContext";
import { useParams } from "react-router-dom";
import { Usuario as UsuarioType } from "../../types";
import { UsuarioAvatar } from "./UsuarioAvatar/UsuarioAvatar";
import { UsuarioInfo } from "./UsuarioInfo/UsuarioInfo";
import { UsuarioLinks } from "./UsuarioLinks/UsuarioLinks";

export const Usuario = () => {
  const { username } = useParams();
  const { user } = useUserContext();
  const { data, loading, error, setData } = useFetch<UsuarioType>({
    url: `/user/${username}`,
  });

  if (error) {
    return null;
  }

  if (loading) {
    return <span className="text-white">Cargando...</span>;
  }

  return (
    <main className="max-w-[1180px] m-auto text-stone-200 flex flex-col p-4">
      <section className="flex mt-8 gap-2">
        <UsuarioAvatar
          urlAvatar={data?.urlAvatar}
          sameUser={user?.username == username}
          setUser={(s:string)=> setData({...data, urlAvatar:s})}
        />
        <UsuarioInfo usuario={data!} sameUser={user?.username == username} setUser={setData}/>
        <UsuarioLinks userLinks={data!.links} sameUser={user?.username == username} setData={setData}/>
      </section>

      <div className="mt-36 text-stone-600 whitespace-pre-line">
        {JSON.stringify(data, null, 2)}
      </div>
    </main>
  );
};
