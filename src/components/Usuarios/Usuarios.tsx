import { UsuarioCard } from "@components/UsuarioCard/UsuarioCard";
import { useFetch } from "@hooks/useFetch";
import { Usuario } from "../../types";


export const Usuarios = () => {
  const { data, loading, error } = useFetch<Usuario[]>({
    url: "/user",
  });

  if (error) {
    return <span>Hubo un error intentando traer los usuarios!</span>;
  }

  if (loading) {
    return (
      <span className="text-white">cargando...</span>
    );
  }

  if (!data) {
    return <span>No hay usuarios</span>;
  }

  return (
    <main className="max-w-[1024px] m-auto text-stone-200 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] p-4">
      {data!.map((usuario: Usuario) => (
        <UsuarioCard key={usuario.id} usuario={usuario} />
      ))}
    </main>
  );
};
