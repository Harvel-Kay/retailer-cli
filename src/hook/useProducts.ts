import { useInfiniteQuery } from "@tanstack/react-query";
import http from "../services/http";
import { IGenre } from "./useGenres";
import useAppContext from "../hooks/useAppContext";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  tag: string;
  thumbnail: string;
  genre: IGenre;
  numberInStock: number;
  added: Date;
  qty?: number;
}

export interface ProdFetch {
  last_page: number;
  next: number | null;
  products: IProduct[];
}

interface IProdFilter {
  query?: string;
  genre_id?: string;
  stock?: boolean;
}

export default function useProducts(qObj: IProdFilter) {
  const { genre_id = "", query = "", stock = false } = qObj;

  const { cart } = useAppContext();
  return useInfiniteQuery<ProdFetch>({
    queryKey: ["products"],
    queryFn: ({ pageParam }) =>
      http
        .get<ProdFetch>(
          `/products/${pageParam}?genre_id=${query}&query=${genre_id}&stock=${
            stock ? "stock" : ""
          }`
        )
        .then(({ data }) => {
          data.products = data.products.map((product) => {
            let clone: any = { _id: "" };
            cart.forEach((prod) => {
              if (prod._id === product._id) clone = prod;
            });
            return product._id === clone._id ? clone : product;
          });
          return data;
        }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    maxPages: 3,
  });
}

export function useNewProducts() {
  return useInfiniteQuery<ProdFetch>({
    queryKey: ["products"],
    queryFn: ({ pageParam }) =>
      http.get<ProdFetch>(`/new/${pageParam}`).then(({ data }) => data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
    maxPages: 3,
  });
}
