import { Link as TLink, Usuario } from "types";
import { AddLinkButton } from "./AddLinkButton";
import { useState } from "react";
import { AddLinksModal } from "./AddLinksModal";
import { updateUser } from "@api/updateUser";
import { Link } from "./Link";

interface Props {
  userLinks: TLink[];
  sameUser: boolean;
  setData: (o: object) => void;
}

export const UsuarioLinks = ({ userLinks, sameUser, setData }: Props) => {
  const [editingLinks, setEditingLinks] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addLink = async (newLink: TLink) => {
    if (newLink.link == "" || newLink.textToShow == "") {
      setEditingLinks(false);
      return;
    }
    setIsLoading(true);
    const allLinks = [...userLinks];
    allLinks.push(newLink);

    await updateUser({ links: allLinks });

    setData((data: Usuario) => ({ ...data, links: allLinks }));
    setEditingLinks(false);
    setIsLoading(false);
  };

  const deleteLink = async (linkText: string) => {
    const newLinks = userLinks.filter((link:TLink)=> link.link != linkText);
    setIsLoading(true);
    await updateUser({links:newLinks});
    setData((data: Usuario) => ({ ...data, links: newLinks }));
    setIsLoading(false)
  }

  return (
    <section
      className={`flex flex-col gap-2 relative p-4 group w-[18ch] bg-black ${sameUser && "hover:outline outline-1 outline-stone-800"} ${isLoading && "spinner"}`}
    >
      <h3 className="mb-4">Enlaces</h3>
      {userLinks.map((link:TLink) => <Link link={link} key={link.textToShow} deleteLinkMethod={deleteLink}/>)}
      {userLinks.length === 0 && (
        <span className="text-sm text-stone-500">No hay enlaces aún.</span>
      )}
      {sameUser && (
        <AddLinkButton
          addLinkMethod={() => {
            setEditingLinks(true);
          }}
        />
      )}
      {editingLinks && (
        <AddLinksModal
          closeModal={() => setEditingLinks(false)}
          addLink={addLink}
        />
      )}
    </section>
  );
};
