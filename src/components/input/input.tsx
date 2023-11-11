import { InputHTMLAttributes } from "react";
import IError from "../error/errorInput";
import ErrorCont from "../error/errorCont";
import React from "react";
interface InputProps {
  type?: string;
  name: string;
  pholder: string;
  classes?: string;
  args?: React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error: IError;
}

export default function Input({
  classes,
  name,
  pholder,
  type,
  error,
  args,
}: InputProps) {
  return (
    <>
      <input
        type={type ?? "text"}
        name={name}
        placeholder={pholder}
        className={`field-control ${classes}`}
        {...args}
      />
      {error && error[name] && <ErrorCont message={error[name]} />}
    </>
  );
}
