import { ServerResponse } from "../types";

const signup_url = `${import.meta.env.VITE_SERVER_URL}/user/auth/signup`;

type ResponseError = {error:string}

export const signup = async ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email:string;
}) : Promise<ServerResponse<undefined> | ResponseError> => {
  try {
    const response = await fetch(signup_url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    });
    const jsonData: ServerResponse<undefined> = await response.json();
    
    if (!jsonData.success) {
      throw new Error(jsonData.message);
    }

    return jsonData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { error: error.message };
  }
};
