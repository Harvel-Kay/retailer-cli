import GenreSelect from "./genreSelect";
import "./styles.css";

interface FormGProps {
  classes?: string;
}

function FormGSelect({ classes }: FormGProps) {
  return (
    <div className={`new-prod ${classes}`}>
      <label htmlFor={"genre_id"} className="form-g-label">
        Category
      </label>
      <GenreSelect args={{ required: true }} />
    </div>
  );
}

export default FormGSelect;
