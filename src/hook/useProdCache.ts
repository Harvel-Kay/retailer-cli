import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { IProduct, ProdFetch } from "./useProducts";

export default function useCache() {
  const qCli = useQueryClient();
  const products: IProduct[] = [];
  const pages = qCli.getQueryData<InfiniteData<ProdFetch>>(["products"])?.pages;
  for (let item of pages as ProdFetch[]) {
    item.products.forEach((prod) => {
      if (!prod.qty) prod.qty = 0;
      products.push(prod);
    });
  }

  return products;
}
