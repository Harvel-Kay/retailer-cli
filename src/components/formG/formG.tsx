import Input from "../input/input";
import FormGProps from "./intformG";
import "./style.css";

function FormG({
  name,
  brand,
  pholder,
  type,
  classes,
  contClass,
  error,
  args,
}: FormGProps) {
  return (
    <div className={`form-g ${contClass}`}>
      <label htmlFor={name} className="form-g-label">
        {brand}
      </label>
      <Input
        error={error}
        name={name}
        pholder={pholder || name}
        type={type ?? "text"}
        classes={classes}
        args={args}
      />
    </div>
  );
}

export default FormG;
