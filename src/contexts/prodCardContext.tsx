import React from "react";
import IProduct from "../interfaces/product";

interface CardContext {
  prod: IProduct;
}

const ProdCardContext = React.createContext<CardContext>({} as CardContext);

export default ProdCardContext;
