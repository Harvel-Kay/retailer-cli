import { Navigate, Outlet } from "react-router-dom";
import store from "../../../services/storage";

export default function PrivateTabs() {
  const user = store.user();

  if (!user) return <Navigate to={"auth"} replace />;

  return <Outlet />;
}
