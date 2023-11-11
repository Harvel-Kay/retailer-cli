import { Link } from "react-router-dom";
import GenreTable from "./genreTable";

export default function GenreSection() {
  return (
    <section className="category-sect">
      <div className="genre-cont flex-bx">
        <Link to={"genres"} className="_link form-btn flex-b">
          Add+
        </Link>
        <h2 className="genre-title">Categories</h2>
      </div>
      <GenreTable />
    </section>
  );
}
