import { useState } from "react";
import { validateData } from "../../../validate";
import { signup } from "@api";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, ErrorAlert } from "@components";

export const CrearCuentaForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const nav = useNavigate();

  const showErrors = (errs: string[]) => {
    setErrors(errs);
    setTimeout(() => {
      setErrors([]);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;

    const validation = await validateData({
      schemaName: "signup",
      data: { username, password, email },
    });
    if ("error" in validation) {
      showErrors(validation.error);
      return;
    }

    const signupResponse = await signup({ username, password, email });
    if ("error" in signupResponse) {
      showErrors([signupResponse.error]);
      return;
    }

    nav("/ingresar");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 text-sm border border-stone-800 p-4"
    >
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" className="mb-2 bg-stone-800 border border-stone-700 p-1 focus:outline-none"/>
      <label htmlFor="username">Nombre de usuario:</label>
      <input
        type="text"
        name="username"
        id="username"
        className="mb-2 bg-stone-800 border border-stone-700 p-1 focus:outline-none"
        autoComplete="off"
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        name="password"
        id="password"
        className="mb-2 bg-stone-800 border border-stone-700 p-1 focus:outline-none"
      />
      <PrimaryButton label="Crear cuenta" type="submit" />
      {errors.length !== 0 && (
        <div className="absolute right-10 bottom-10 flex flex-col gap-2">
          {errors.map((err) => (
            <ErrorAlert message={err} key={err} />
          ))}
        </div>
      )}
    </form>
  );
};
