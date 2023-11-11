import { Outlet } from "react-router-dom";
import "./styles.css";

export default function Auth() {
  return (
    <div className="auth-cont grid">
      <Outlet />
    </div>
  );
}
