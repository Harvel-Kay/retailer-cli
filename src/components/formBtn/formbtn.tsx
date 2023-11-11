import Spin from "../spin/spin";
import "./style.css";

interface BtnProps {
  brand: string;
  classes?: string;
  btn_event: () => void;
  navState?: string | boolean;
  disabled?: boolean | undefined;
  spinCls?: string;
}

function FormBtn({
  brand,
  classes = "",
  btn_event,
  navState = "",
  disabled,
  spinCls,
}: BtnProps) {
  const spin = () =>
    navState === true || navState === "submitting" || navState === "loading";
  return (
    <>
      {spin() && <Spin spinCls={spinCls} />}

      {!spin() && (
        <button
          className={`form-btn flex-b ${classes}`}
          disabled={disabled}
          onClick={btn_event}
        >
          <p className="form-submit">{brand}</p>
        </button>
      )}
    </>
  );
}

export default FormBtn;
