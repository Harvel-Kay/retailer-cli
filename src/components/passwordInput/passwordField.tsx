import Input from "../input/input";
import { useState } from "react";
import "./styles.css";
import IError from "../error/errorInput";

interface PasswordProps {
  classes?: string;
  contClass?: string;
  error: IError;
  pholder?: string;
}

function PasswordInput({ classes, contClass, error, pholder }: PasswordProps) {
  const [show, setShow] = useState(false);
  const type = show ? "text" : "password";
  return (
    <div className={`form-g grid ${contClass}`}>
      <label htmlFor={"password"} className="form-g-label">
        {pholder ? "Password" : "Confirm"}
      </label>
      <Input
        error={error}
        args={{ required: true, maxLength: 20, minLength: 8 }}
        pholder={pholder ? pholder : "Confirm"}
        type={type}
        name="password"
        classes={classes}
      />
      <input
        type="checkbox"
        onChange={() => setShow(!show)}
        className="show-password"
      />
    </div>
  );
}

export default PasswordInput;
