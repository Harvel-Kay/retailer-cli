import { InputHTMLAttributes } from "react";
import IError from "../../error/errorInput";

export default interface InputGProps {
  brand: string;
  type?: string;
  name: string;
  pholder: string;
  classes?: string;
  args?: InputHTMLAttributes<HTMLInputElement>;
  error: IError;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
  contClass?: string;
}
