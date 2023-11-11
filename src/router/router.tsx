import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartPage from "../components/routes/cart/cartPage";
import ErrorElement from "../components/routes/error/errorElement";
import GenrePage from "../components/routes/genrePage/genrePage";
import Home from "../components/routes/home/home";
import NotFound from "../components/routes/notfound/notfound";
import ProductSection from "../components/routes/products/productSection";
import Products from "../components/routes/products/products";
import Stock from "../components/routes/stock/stock";
import { loginAction, salesAction } from "./actions";
import { authLoader } from "./loaders";
import Auth from "../components/routes/auth/auth";

import AdminTabs from "../components/routes/auth/admin";
import User from "../components/routes/auth/user";
import OutOfStock from "../components/routes/outofStock/outofstock";
import ProdForm from "../components/routes/product form/productForm";
import Sales from "../components/routes/sales/sales";
import Logout from "../components/routes/auth/logout";
// import Register from "../components/routes/auth/register";
import Login from "../components/routes/auth/login";
import NewItemsPage from "../components/routes/new/newPage";
import SearchPage from "../components/routes/search Page/searchPage";
import { prodAction } from "./actions/productAction";
import BuyPage from "../components/routes/buy/buyPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <CartPage /> },
      { path: "buy", element: <BuyPage /> },
      { path: "new", element: <NewItemsPage /> },
      { path: "search", element: <SearchPage /> },
      {
        path: "auth",
        element: <Auth />,
        loader: authLoader,
        children: [
          { index: true, element: <Login />, action: loginAction },
          // { path: "register", element: <Register />, action: registerAction },
        ],
      },
      {
        path: "me",
        element: <User />,
        children: [
          { index: true, element: <Logout /> },
          {
            element: <AdminTabs />,
            children: [
              {
                path: "products",
                element: <Products />,
                children: [
                  {
                    index: true,
                    element: <ProductSection />,
                    action: prodAction,
                  },
                  { path: "genres", element: <GenrePage /> },
                ],
              },
              { path: "stock", element: <Stock /> },
              { path: "sales", element: <Sales />, action: salesAction },
              { path: "out-of-stock", element: <OutOfStock /> },
              { path: "product-form", element: <ProdForm /> },
            ],
          },
        ],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
