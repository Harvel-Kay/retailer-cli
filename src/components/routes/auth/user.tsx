import { Outlet } from "react-router-dom";
import AdminNav from "../../navbar/adminNav";
import "./styles.css";

export default function User() {
  return (
    <div className="auth-cont home-page grid">
      <AdminNav />
      <Outlet />
    </div>
  );
}
