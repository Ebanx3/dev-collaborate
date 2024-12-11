import { ServerResponse } from "../types";

const updateUser_url = `${import.meta.env.VITE_SERVER_URL}/user/`;

type ResponseError = {error:string}

export const updateUser = async (body:object) : Promise<ServerResponse<undefined> | ResponseError> => {
  try {
    const response = await fetch(updateUser_url, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials:"include"
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
