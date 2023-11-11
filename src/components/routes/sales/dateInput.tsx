import ErrorCont from "../../error/errorCont";
import IError from "../../error/errorInput";

interface IDateProps {
  name: string;
  error?: IError;
}

export default function DateInput({ name, error }: IDateProps) {
  return (
    <div className="date-cont">
      <input type="date" name={name} required />
      {error && error[name] && <ErrorCont message={error[name]} />}
    </div>
  );
}
