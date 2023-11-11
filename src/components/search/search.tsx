import { useNavigate } from "react-router-dom";
import SearchIcon from "./searchIcon";
import { ChangeEvent } from "react";
import "./style.css";
import useAppContext from "../../hooks/useAppContext";

export default function Search() {
  const { queryObj, setFilter } = useAppContext();
  const navigate = useNavigate();

  const updateQ = (e: ChangeEvent<HTMLInputElement>) => {
    const clone = { ...queryObj };
    clone.query = e.target.value;

    setFilter(clone);
  };

  return (
    <div className="search-cont grid">
      <SearchIcon />

      <input
        type="text"
        className="search-field"
        placeholder="Search a product"
        onChange={(e) => updateQ(e)}
        value={queryObj.query || ""}
        onFocus={() =>
          navigate("search", { state: { from: window.location.pathname } })
        }
      />
    </div>
  );
}
