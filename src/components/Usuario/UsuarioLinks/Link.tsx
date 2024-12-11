interface Props {
  link: { link: string; textToShow: string };
  deleteLinkMethod: (s:string) =>void;
}

export const Link = ({ link, deleteLinkMethod }: Props) => {
  return (
    <span className="flex justify-between" onClick={()=>deleteLinkMethod(link.link)}>
      <a
        href={link.link}
        target="_blank"
        className="text-cyan-600 font-bold hover:text-cyan-400"
      >
        {link.textToShow}
      </a>
      <button className="text-stone-600 hover:text-red-400 hidden group-hover:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-square-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
          <path d="M9 9l6 6m0 -6l-6 6" />
        </svg>
      </button>
    </span>
  );
};
