import {createContext} from "react";
import {Usuario} from "../types"

interface UserContext {
  user: Usuario | null;
  setUser: React.Dispatch<React.SetStateAction<Usuario | null>>;
}

export const userContext = createContext<UserContext>({
  user: null,
  setUser: () => {},
});