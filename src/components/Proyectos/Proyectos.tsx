import { Nuevo } from "@components/Nuevo/Nuevo";
import { useFetch } from "@hooks/useFetch";
import { Proyecto as TProyecto } from "types";

export const Proyectos = () => {
  const { data, loading, error } = useFetch<TProyecto[]>({ url: "/proyecto" });
  console.log(data);

//   if (error) {
//     return <span>Hubo un error intentando traer los usuarios!</span>;
//   }

  if (loading) {
    return <span className="text-white">cargando...</span>;
  }

  return (
    <main className="max-w-[1024px] m-auto text-stone-200 flex flex-col p-4">
      <Nuevo label="Nuevo Proyecto" toPage="/crear_proyecto" />
      {data && data.map((proyecto: TProyecto) => <span>{proyecto.name}</span>)}
    </main>
  );
};
