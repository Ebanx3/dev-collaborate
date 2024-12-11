import { useState, useEffect, ReactNode } from "react";
import { User, userContext } from "./UserContext";

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const savedUser = JSON.parse(
      localStorage.getItem("user-social-media-dev") || "null"
    );
    const [user, setUser] = useState<User | null>(savedUser);
  
    useEffect(() => {
      localStorage.setItem("user-social-media-dev", JSON.stringify(user));
    }, [user]);
    return (
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    );
  };