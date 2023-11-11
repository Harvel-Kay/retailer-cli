import IError from "../error/errorInput";
import React from "react";

export default interface FormGProps {
  name: string;
  brand: string;
  pholder: string;
  type?: string;
  classes?: string;
  contClass?: string;
  error: IError;
  args: React.InputHTMLAttributes<HTMLInputElement>;
}
