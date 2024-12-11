import { ServerResponse } from "types";
import { updateUser } from "./updateUser";

const get_signature_endpoint = `${
  import.meta.env.VITE_SERVER_URL
}/user/get-signature`;
const cloudinary_api_key = import.meta.env.VITE_CLOUDINARY_API_KEY;
const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const cloudinary_endpoint = import.meta.env.VITE_CLOUDINARY_ENDPOINT;

type CloudinaryData = {
  signature: string;
  timestamp: number;
};

export const uploadNewAvatar = async (image: any) => {
  try {
    const signatureResponse = await fetch(get_signature_endpoint, {
      credentials: "include",
    });
    const jsonData: ServerResponse<CloudinaryData> =
      await signatureResponse.json();

    if (!jsonData.success) {
      throw new Error(jsonData.message);
    }

    const { signature, timestamp } = jsonData.data!;

    const data = new FormData();
    data.append("file", image);
    data.append("api_key", cloudinary_api_key);
    data.append("signature", signature);
    data.append("timestamp", timestamp.toString());

    const cloudindaryResponse = await fetch(
      `${cloudinary_endpoint}/${cloud_name}/image/upload`,
      {
        method: "post",
        body: data,
      }
    );

    const jsonResponse = await cloudindaryResponse.json();
    console.log(jsonResponse)

    const urlAvatar = `https://res.cloudinary.com/${cloud_name}/image/upload/v${jsonResponse.version}/${jsonResponse.public_id}.${jsonResponse.format}`;

    const updatedUser = await updateUser({urlAvatar});
    if(updatedUser.success) return urlAvatar;
  } catch (error) {
    console.log(error);
    return null;
  }
};
