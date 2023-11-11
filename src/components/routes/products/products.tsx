import GenreSection from "./genreSection";
import "./styles.css";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="products-page grid">
      <GenreSection />
      <Outlet />
    </div>
  );
}
