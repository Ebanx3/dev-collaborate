interface Props {
  addLinkMethod: () => void;
}

export const AddLinkButton = ({ addLinkMethod }: Props) => {
  return (
    <button className="group-hover:flex text-xs items-center gap-1 bg-stone-700 p-1 absolute top-4 right-4 rounded-lg hidden hover:bg-stone-500" onClick={addLinkMethod}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    </button>
  );
};
