import { ChangeEvent } from "react";
import useGenres from "../../hook/useGenres";
import useAppContext from "../../hooks/useAppContext";
import "./styes.css";
import { useNavigate } from "react-router-dom";

function GenreSelect() {
  const { queryObj, setFilter } = useAppContext();
  const { data: genres } = useGenres();

  const navigate = useNavigate();
  const updateQ = (e: ChangeEvent<HTMLSelectElement>) => {
    const clone = { ...queryObj };
    clone.genre_id = e.target.value ?? "";
    setFilter(clone);
  };

  return (
    <select
      name={"genre_id"}
      className={"category-cont"}
      onChange={(e) => updateQ(e)}
      onFocus={() => navigate("/search")}
    >
      <option value="">{"Category..."}</option>
      {genres?.map((gen) => (
        <option value={gen._id} key={gen._id}>
          {gen.name}
        </option>
      ))}
    </select>
  );
}

export default GenreSelect;
