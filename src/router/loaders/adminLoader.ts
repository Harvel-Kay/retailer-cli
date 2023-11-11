import { redirect } from "react-router-dom";
import store from "../../services/storage";

export function adminLoader() {
  const user = store.user();

  if (!user) return redirect("/");
  if (!user.isAdmin) return redirect("/");

  return null;
}
