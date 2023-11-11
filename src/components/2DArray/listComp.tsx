import { InfiniteData } from "@tanstack/react-query";
import React from "react";
import ProdCard from "../product card/prodCard";
import { ProdFetch } from "../../hook/useProducts";

interface ListProps {
  data?: InfiniteData<ProdFetch> | any;
}

export default function ListComp({ data }: ListProps) {
  if (!data) return null;
  const { pages } = data as InfiniteData<ProdFetch>;
  return (
    <>
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.products.map((prod, index) => (
            <ProdCard key={index} prod={prod} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
