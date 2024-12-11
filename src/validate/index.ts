import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .max(20, "El nombre de usuario debe contener cómo máximo 20 caracteres"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña debe contener cómo máximo 20 caracteres"),
});

const signupSchema = z.object({
  username: z
    .string({ message: "nombre de usuario debe ser un string" })
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .max(20, "El nombre de usuario debe contener cómo máximo 20 caracteres"),
  password: z
    .string({ message: "password debe ser un string" })
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña debe contener cómo máximo 20 caracteres"),
  email: z
    .string({ message: "email debe ser un string" })
    .email("Email no válido"),
});

const schemas = {
  login: loginSchema,
  signup: signupSchema,
};

export const validateData = async ({
  schemaName,
  data,
}: {
  schemaName: "signup" | "login";
  data: object;
}) => {
  try {
    return await schemas[schemaName].parseAsync(data);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessages = error.issues.map((e: Error) => e.message);
    return { error: errorMessages };
  }
};
