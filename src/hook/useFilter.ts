import useAppContext from "../hooks/useAppContext";
import http from "../services/http";
import { useEffect, useState } from "react";
import { IProduct } from "./useProducts";
import { AxiosError } from "axios";

export interface IQueryObj {
  query?: string;
  genre_id?: string;
}

export default function useFilter() {
  const [products, setProds] = useState<IProduct[]>([]);

  const { queryObj: qObj } = useAppContext();
  useEffect(() => {
    const control = new AbortController();

    const timer = setTimeout(
      () =>
        http
          .get(
            `products/1?query=${qObj.query ?? ""}&genre_id=${
              qObj.genre_id ?? ""
            }`,
            {
              signal: control.signal,
            }
          )
          .then(({ data }) => setProds(data.products))
          .catch((err) => {
            if (err instanceof AxiosError) return;
          }),
      600
    );
    return () => {
      control.abort();
      clearTimeout(timer);
    };
  }, [qObj]);
  return { products };
}
