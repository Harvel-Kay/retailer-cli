import { useState } from "react";
import FormBtn from "../../formBtn/formbtn";
import FormG from "../../formG/formG";
import IPayload from "../../../interfaces/payload";
import useAppContext from "../../../hooks/useAppContext";
import ErrorCont from "../../error/errorCont";
import http from "../../../services/http";
import { AxiosError } from "axios";

export default function ClientForm() {
  const { cart } = useAppContext();
  const [error, setError] = useState<IPayload>({});
  const [payload, setPayload] = useState<IPayload>({});
  const [load, setLoad] = useState(false);
  const [msg, setMsg] = useState("");

  const create = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clone = { ...payload };
    clone[e.target.name] = e.target.value;
    setPayload(clone);
  };

  const order = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoad(true);
      if (cart.length === 0) {
        const clone = { ...error };
        clone.empty = "Oops, Add somthing to your Cart ....🛒";
        setError(clone);
        return;
      }
      console.log("Submit triggered...", load);
      const clone = { ...payload };
      clone.products = cart;
      setPayload(clone);
      const { data } = await http.post("/orders", payload);
      setMsg(data);
    } catch (err) {
      const clone = { ...error };
      if (err instanceof AxiosError) clone.empty = err.response?.data;
      else alert("Something Failed, please try again...");
      setError(clone);
    } finally {
      setLoad(false);
    }
  };

  return (
    <form className="order-details grid" onSubmit={(e) => order(e)}>
      {msg && (
        <div className="success">
          <p className="success-p">👍 {msg}</p>
        </div>
      )}
      <h2>Client's Details</h2>
      <FormG
        brand="Name"
        name="name"
        pholder="Your name"
        error={{}}
        args={{
          required: true,
          maxLength: 20,
          minLength: 3,
          onChange: (e) => create(e),
        }}
      />
      <FormG
        brand="Phone"
        name="phone"
        pholder="Your contact"
        error={{}}
        args={{
          required: true,
          maxLength: 20,
          minLength: 3,
          onChange: (e) => create(e),
        }}
      />
      {error.empty ? (
        <ErrorCont classes="cart-err" message={error.empty as string} />
      ) : null}
      <FormBtn brand="Submit" btn_event={() => {}} navState={load} />
    </form>
  );
}
