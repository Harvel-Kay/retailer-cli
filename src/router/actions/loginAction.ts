import { ActionFunctionArgs } from "react-router-dom";
import http from "../../services/http";
import IPayload from "../../interfaces/payload";
import IError from "../../components/error/errorInput";
import { AxiosError } from "axios";
import Store from "../../enums/storage";
import store from "../../services/storage";

export async function loginAction({ request }: ActionFunctionArgs) {
  const error: IError = {};
  try {
    const formData = await request.formData();
    const payload: IPayload = {};

    for (let val of formData.entries()) {
      payload[val[0]] = val[1] as string;
    }

    const { headers } = await http.post("/login", payload);
    store.setToken(headers[Store.Auth_id] as string);
    window.location.replace("/");
  } catch (err) {
    const { response } = err as AxiosError;
    if (response) {
      const message = (response.data as string).toLocaleLowerCase();

      if (message.includes("username")) error.username = message;
      if (message.includes("password")) error.password = message;
    } else alert("Oops Something went wrong try again later");
    console.log("Login action error", err);
  }
  return error;
}
