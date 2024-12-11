interface Props {
  setEditUserInfo: () => void;
  confirmChangesMethod: () => void;
}

export const ConfirmCancelEditButtons = ({ setEditUserInfo, confirmChangesMethod }: Props) => {
  return (
    <>
      <button
        className="absolute hidden top-4 right-14 group-hover:inline-block bg-stone-700 p-1 rounded-md hover:bg-stone-500 text-red-500"
        type="button"
        onClick={setEditUserInfo}
        title="cancelar edición"
      >
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-cancel"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M18.364 5.636l-12.728 12.728" />
        </svg>
      </button>
      <button
        className="absolute hidden top-4 right-4 group-hover:inline-block bg-stone-700 p-1 rounded-md hover:bg-stone-500 text-emerald-500"
        type="button"
        onClick={confirmChangesMethod}
        title="confirmar edición"
      >
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </button>
    </>
  );
};
