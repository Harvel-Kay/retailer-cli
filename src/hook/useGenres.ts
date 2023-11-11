import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import apiGenre from "../api/genreApi";
import useQClient from "./useQClient";
import IError from "../components/error/errorInput";
import { AxiosError } from "axios";

const genKey = ["genres"];

export interface IGenre {
  _id: string;
  name: string;
}

export default function useGenres() {
  return useQuery<IGenre[]>({
    queryKey: genKey,
    queryFn: () => apiGenre.getAll().then(({ data }) => data),
  });
}

export function usePostGenre() {
  const [error, setError] = useState<IError>({});
  const qClient = useQClient();
  return {
    mutant: useMutation({
      mutationFn: (name: string) =>
        apiGenre.post({ name }).then(({ data }) => data),
      onError: (err) => {
        if (err instanceof AxiosError) setError({ name: err.response?.data });
      },
      onSuccess: () => {
        qClient.invalidateQueries({ queryKey: genKey });
      },
    }),
    error,
  };
}

export function useDelGenre() {
  const qClient = useQClient();
  return useMutation({
    mutationFn: (genre_id: string) =>
      apiGenre.delete(genre_id).then(({ data }) => data),
    onError: () => {
      alert("Something went wrong");
    },
    onSuccess: () => {
      qClient.invalidateQueries({ queryKey: genKey });
    },
  });
}
