import { ActionFunctionArgs } from "react-router-dom";
import IPayload from "../../interfaces/payload";
import IError from "../../components/error/errorInput";
import { AxiosError } from "axios";
import sumApi from "../../api/sumApi";

export async function salesAction({ request }: ActionFunctionArgs) {
  const error: IError = {};
  const res: IError = {};
  try {
    const formData = await request.formData();
    const payload: IPayload = {};
    for (let val of formData.entries()) {
      payload[val[0]] = val[1] as string;
    }

    const { data } = await sumApi.post(payload);
    res.data = data;
  } catch (err) {
    const { response } = err as AxiosError;
    if (response) {
      const message = (response.data as string).toLocaleLowerCase();

      if (message.includes("fromdate")) error.fromdate = message;
      if (message.includes("todate")) error.todate = message;
      if (message.includes("interval")) error.interval = message;
    } else alert("Oops Something went wrong try again later");
    console.log("Sales Action error", err);
  }

  res.error = error;
  return res;
}
