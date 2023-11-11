import React from "react";
import { useLocation } from "react-router-dom";
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import IProduct from "../../interfaces/product";
import ProdCardContext from "../../contexts/prodCardContext";
import "./style.css";
import CardHomeFooter from "./cardHomeFooter";
import CardStockFooter from "./cardStockFooter";

interface CardProps {
  prod: IProduct;
  args?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

export default function ProdCard({ prod, args }: CardProps) {
  const { pathname } = useLocation();

  return (
    <ProdCardContext.Provider value={{ prod }}>
      <div className="card grid" {...args}>
        <CardHeader />
         <CardBody />
        {(pathname === "/" ||
          pathname === "/cart" ||
          pathname === "/new" ||
          pathname === "/search") && <CardHomeFooter />}
        {(pathname === "/me/stock" || pathname === "/me/out-of-stock") && (
          <CardStockFooter />
        )}
      </div>
    </ProdCardContext.Provider>
  );
}
