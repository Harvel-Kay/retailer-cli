import { Outlet } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/appheader/header";
import { useState } from "react";
import IProduct from "./interfaces/product";
import AppContext from "./contexts/appContext";
import { IQueryObj } from "./hook/useFilter";

function App() {
  const [preview, setSrc] = useState("");
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [queryObj, setFilter] = useState<IQueryObj>({} as IQueryObj);

  return (
    <AppContext.Provider
      value={{
        show,
        cart,
        queryObj,
        setFilter,
        setCart,
        setSrc,
        setShow,
      }}
    >
      <div className="app">
        <AppHeader />
        {show && (
          <div className="preview-cont" onClick={() => setShow(!show)}>
            <img src={preview} alt="Preview" className="preview-img" />
          </div>
        )}
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default App;
