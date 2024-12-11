import { useState } from "react";
import { Link } from "types";

interface Props {
  closeModal: () => void;
  addLink: (l:Link) => void;
}

export const AddLinksModal = ({ closeModal, addLink }: Props) => {
  const [link, setLink] = useState("");
  const [textToShow, setToTextToShow] = useState("");

  return (
    <div className="flex flex-col justify-center items-center gap-3  bg-black absolute bottom-0 left-0 top-0 right-0 text-sm">
      <input
        type="text"
        placeholder="texto a mostrar"
        className="w-40 p-1 bg-stone-900 focus:outline-none"
        value={textToShow}
        onChange={(e) => setToTextToShow(e.target.value)}
      />
      <input
        type="text"
        placeholder="dirección enlace"
        className="w-40 p-1 bg-stone-900 focus:outline-none"
        value={link}
        onChange={(e)=>setLink(e.target.value)}
      />
      <button className="text-cyan-500 mt-2 hover:text-cyan-300" onClick={()=> addLink({link, textToShow})}>
        Agregar
      </button>
      <button
        className="text-xs text-stone-500 hover:text-stone-400"
        onClick={closeModal}
      >
        Cancelar
      </button>
    </div>
  );
};
