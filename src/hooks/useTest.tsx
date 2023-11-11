import http from "../services/http";
import { useEffect } from "react";
import { AxiosError } from "axios";

export default function useTest(query: string) {
  useEffect(() => {
    const control = new AbortController();
    const timer = setTimeout(
      () =>
        http
          .get(`products/1?query=${query}`, {
            signal: control.signal,
          })
          .then(({ data }) => console.log(data))

          .catch((err) => {
            if (err instanceof AxiosError) return;
            console.log("Error collecting data => ", err);
          }),
      600
    );
    return () => {
      control.abort();
      clearTimeout(timer);
    };
  }, [query]);

  return null;
}
