import React from "react";
import IProduct from "../interfaces/product";
import { IQueryObj } from "../hook/useFilter";

interface IAppContext {
  setSrc: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setFilter: React.Dispatch<React.SetStateAction<IQueryObj>>;
  queryObj: IQueryObj;
  cart: IProduct[];
  show: boolean;
}

const AppContext = React.createContext<IAppContext>({} as IAppContext);

export default AppContext;
