import { Link, useLocation } from "react-router-dom";
import menu_tabs from "./menu_tabs";
import "./styles.css";
import store from "../../services/storage";

export default function AdminNav() {
  const { pathname: path } = useLocation();

  const user = store.user();
  if (!user || !user.isAdmin) return null;

  return (
    <nav className="admin-nav flex-b">
      {menu_tabs.map((tab) => (
        <Link
          to={tab.path}
          key={tab.path}
          className={`_link ${
            path.toLowerCase().includes(tab.path) && "active"
          }`}
        >
          {tab.label}
        </Link>
      ))}
      <Link to="out-of-stock" className="_link out-of-stock">
        D
      </Link>
    </nav>
  );
}
