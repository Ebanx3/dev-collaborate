import { PrimaryButton } from "@components/PrimaryButton/PrimaryButton";
import { useState } from "react";

export const CrearProyectoForm = () => {
const [numMembers, setNumMembers] = useState(2);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-sm border border-stone-800 p-4 max-w-[800px] m-auto"
    >
      <h1 className="text-2xl font-bold text-center underline">
        Crear un nuevo Proyecto
      </h1>
      <label htmlFor="projectName">Nombre:</label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        className="mb-2 bg-stone-800 border border-stone-700 p-1 focus:outline-none"
      />
      <label htmlFor="details">Detalles:</label>
      <textarea
        name="details"
        id="details"
        className="mb-2 bg-stone-800 border border-stone-700 p-1 focus:outline-none resize-none"
        rows={6}
      ></textarea>
      <label htmlFor="numMembers" className="flex justify-between items-center">
        <span>
          Cantidad de miembros:
          <span className="text-stone-400">(entre 2 y 10)</span>
        </span>

        <div className="bg-stone-800 flex items-center p-1">
          <button onClick={() => {setNumMembers(currentValue => currentValue - 1)}} className="text-3xl hover:text-white text-stone-400 disabled:text-stone-700 font-bold" disabled={numMembers == 2}>-</button>
          <input type="number" id="numberInput" value={numMembers} className="bg-stone-800 border border-none  focus:outline-none text-xl w-12 text-center" />
          <button onClick={() => {setNumMembers(currentValue => currentValue + 1)}} className="text-3xl hover:text-white text-stone-400 disabled:text-stone-700 font-bold" disabled={numMembers == 10}>+</button>
        </div>
      </label>
      <label htmlFor="technologies">
        Tecnologías:
        <span className="text-stone-400">(entre 1 y 8, separadas por ',')</span>
      </label>
      <input
        type="text"
        id="technologies"
        name="technologies"
        className="mb-2 bg-stone-800 border border-stone-700 p-1 focus:outline-none"
        placeholder="html,css,react,node"
      />
      <PrimaryButton label="Crear Proyecto" type="submit" />
    </form>
  );
};
