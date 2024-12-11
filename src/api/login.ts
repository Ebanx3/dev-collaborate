import { ServerResponse, Usuario } from "../types";

const login_url = `${import.meta.env.VITE_SERVER_URL}/user/auth/login`;

type ResponseError = {error:string}

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) : Promise<Usuario | ResponseError> => {
  try {
    const response = await fetch(login_url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials:"include"
    });
    const jsonData: ServerResponse<Usuario> = await response.json();
    
    if (!jsonData.success) {
      throw new Error(jsonData.message);
    }

    return jsonData.data as Usuario;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { error: error.message };
  }
};
