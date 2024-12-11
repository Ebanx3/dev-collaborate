interface Props {
  label : string;
  onClickMethod?: ()=>void;
  type?: "submit" | "button"
}

export const PrimaryButton = ({ label, onClickMethod, type }: Props) => {
  return (
    <button
      className=" py-1 px-4 font-bold border border-cyan-400 text-cyan-400 hover:bg-cyan-700 hover:text-white hover:border-cyan-700 transition duration-400"
      onClick={onClickMethod}
      type={type}
    >
      {label}
    </button>
  );
};
