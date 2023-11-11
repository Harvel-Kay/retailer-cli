import IError from "./errorInput";
import "./styles.css";

interface ErrorProps {
  error?: IError;
  message: string;
  classes?: string;
  pClass?: string;
}

function ErrorCont({ error, message, classes = "", pClass = "" }: ErrorProps) {
  return (
    <div className={`error ${classes}`}>
      <p className={`error ${pClass}`}>{error ? error.data : message}</p>
    </div>
  );
}

export default ErrorCont;
