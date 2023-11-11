import { useLocation, useNavigate } from "react-router-dom";
import FormBtn from "../../formBtn/formbtn";
import InputGroup from "./InputGroup";
import { useState } from "react";
import IPayload from "../../../interfaces/payload";
import IError from "../../error/errorInput";
import "./style.css";
import Spin from "../../spin/spin";
import apiProd from "../../../api/productsApi";
import { AxiosError } from "axios";

export default function ProdForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const prod = state as unknown;
  const [payload, setPay] = useState<IPayload>({ ...(prod as IPayload) });
  const [error, setError] = useState<IError>({});
  const [load, setLoad] = useState(false);

  const createPayload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target;
    const clone = { ...payload };
    clone[field.name] = field.value;
    setPay(clone);
  };

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const error: IError = {};
    try {
      setLoad(true);
      await apiProd.put(payload, `${payload?._id}`);
      navigate("/me/stock");
    } catch (err) {
      const { response } = err as AxiosError;
      if (response) {
        const message = (response.data as string).toLocaleLowerCase();

        if (message.includes("name")) error.name = message;
      } else alert("Oops Something went wrong try again later");
      console.log("Product Action error", err);
    } finally {
      setLoad(false);
    }
    setError(error);
  };

  return (
    <div className="home-page">
      <form className="update-form  grid" onSubmit={(e) => onSave(e)}>
        <h2 style={{ color: "white" }}>Product form</h2>
        <InputGroup
          brand="Product Name"
          pholder="Name"
          value={payload?.name}
          onChange={(e) => createPayload(e)}
          error={error}
          name="name"
          args={{ required: true, minLength: 3, maxLength: 20 }}
        />
        <InputGroup
          brand="Quantity"
          pholder="Quantity"
          value={payload?.numberInStock}
          onChange={(e) => createPayload(e)}
          error={error}
          name="numberInStock"
          args={{ required: true, min: 0 }}
        />
        <InputGroup
          brand="Price"
          pholder="price"
          value={payload?.price}
          onChange={(e) => createPayload(e)}
          error={error}
          name="price"
          args={{ required: true, min: 0 }}
        />
        {load ? <Spin /> : <FormBtn brand="Save" btn_event={() => {}} />}
      </form>
    </div>
  );
}
