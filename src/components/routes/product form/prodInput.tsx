import React, { InputHTMLAttributes } from "react";
import ErrorCont from "../../error/errorCont";

import IError from "../../error/errorInput";
interface InputProps {
  type?: string;
  name: string;
  pholder: string;
  classes?: string;
  args?: InputHTMLAttributes<HTMLInputElement>;
  error: IError;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
}

export default function ProdInput({
  classes,
  name,
  pholder,
  type,
  error,
  args,
  onChange,
  value,
}: InputProps) {
  return (
    <>
      <input
        type={type ?? "text"}
        name={name}
        placeholder={pholder}
        className={`field-control ${classes}`}
        onChange={onChange}
        value={value}
        {...args}
      />
      {error && error[name] && <ErrorCont message={error[name]} />}
    </>
  );
}
