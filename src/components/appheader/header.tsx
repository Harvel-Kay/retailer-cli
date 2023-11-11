import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Search from "../search/search";
import "./styles.css";
import GenreSelect from "../genreSelect/genreSelect";

export default function AppHeader() {
  return (
    <header className="cont grid">
      <h1 className="page-title">Ssekwe's Shop</h1>
      <NavBar />
      <section className="sub-menu flex-b">
        <Link to={"new"} className="form-btn _link new-items">
          New
        </Link>
        <Search />
        <GenreSelect />
      </section>
    </header>
  );
}
