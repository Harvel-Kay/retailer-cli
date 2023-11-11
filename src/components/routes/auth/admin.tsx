import { Navigate, Outlet } from "react-router-dom";
import store from "../../../services/storage";

export default function AdminTabs() {
  const user = store.user();
  if (!user) return <Navigate to={"/auth"} />;
  if (!user.isAdmin) return <Navigate to={"/"} />;
  return <Outlet />;
}
