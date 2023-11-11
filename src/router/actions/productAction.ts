import { ActionFunctionArgs } from "react-router-dom";
import IPayload from "../../interfaces/payload";
import IError from "../../components/error/errorInput";
import { AxiosError } from "axios";
import apiProd from "../../api/productsApi";

export async function prodAction({ request }: ActionFunctionArgs) {
  const error: IError = {};
  const res: IError = {};
  try {
    const formData = await request.formData();
    const payload: IPayload = {};
    for (let val of formData.entries()) {
      payload[val[0]] = val[1] as string;
    }

    if (!payload.tag) {
      error.tag = "Product image required 😮 ";
      return error;
    }

    const { data } = await apiProd.post(payload);
    res.data = data as IPayload;
    window.location.replace("/");
  } catch (err) {
    const { response } = err as AxiosError;
    if (response) {
      const message = (response.data as string).toLocaleLowerCase();

      if (message.includes("name")) error.name = message;
    } else alert("Oops Something went wrong try again later");
    console.log("Product Action error", err);
  }

  res.error = error;
  return res;
}
