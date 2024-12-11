import { Link } from "react-router-dom";

interface Props {
    label:string;
    toPage: string;
}

export const Nuevo = ({label, toPage}:Props) => {
    return <Link to={toPage} className="text-stone-300 self-end border py-1 px-4 text-sm border-stone-300 hover:text-stone-100 font-medium">{label}</Link>
}