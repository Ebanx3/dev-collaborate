import noAvatar from "../../../assets/noavatar.png";
import { UploadAvatar } from "./UploadAvatar";

interface Props {
  urlAvatar?: string;
  sameUser: boolean;
  setUser: (s:string)=>void;
}

export const UsuarioAvatar = ({ urlAvatar, sameUser, setUser }: Props) => {

  return (
    <div className="relative rounded-full overflow-hidden group border-2 border-stone-800 ">
      <img src={urlAvatar || noAvatar} alt="avatar de usuario" className="h-72 w-72 object-cover"/>
      {sameUser && <UploadAvatar setAvatar={setUser}/>}
    </div>
  );
};
