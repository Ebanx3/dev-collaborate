import { useState, useEffect } from "react";
import { ServerResponse } from "../types";

const server_url = import.meta.env.VITE_SERVER_URL;

interface Data<ServerResponse> {
  data: ServerResponse | null;
  loading: boolean;
  error: Error | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: (d:any)=>void;
}

export const useFetch = <T>({ url }: { url: string }): Data<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${server_url}/${url}`);
        if (!response.ok) {
          throw new Error("Error en la patición");
        }
        const jsonData: ServerResponse<T> = await response.json();
        if (!jsonData.success) {
          throw new Error(jsonData.message);
        }
        setData(jsonData.data!);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, [url]);

  return { data, loading, error, setData };
};
