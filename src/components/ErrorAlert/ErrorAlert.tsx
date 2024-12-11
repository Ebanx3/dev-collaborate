interface Props {
    message:string
}
export const ErrorAlert = ({message}:Props) => {
    return <span className="bg-red-600  text-white p-1 font-bold">{message}</span>
}