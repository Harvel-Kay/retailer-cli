import ProdInput from "./prodInput";
import InputGProps from "./inputGProps";

export default function InputGroup({
  brand,
  type,
  name,
  pholder,
  args,
  error,
  contClass,
  classes,
  value,
  onChange,
}: InputGProps) {
  return (
    <div className={`form-g ${contClass}`}>
      <label htmlFor={name} className="form-g-label">
        {brand}
      </label>
      <ProdInput
        error={error}
        name={name}
        pholder={pholder || name}
        type={type ?? "text"}
        classes={classes}
        args={args}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
