import { redirect } from "react-router-dom";
import store from "../../services/storage";

export function authLoader() {
  if (store.user()) return redirect("/me");

  return null;
}
