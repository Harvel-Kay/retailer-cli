import { useMutation } from "@tanstack/react-query";
import apiProd from "../api/productsApi";
import useQClient from "./useQClient";

export default function useProdDel() {
  const qCli = useQClient();

  return useMutation({
    mutationFn: (prod_id: string) =>
      apiProd.delete(prod_id).then(({ data }) => data),
    onError: (err) => {
      alert("Oops  delete operation failed, try again ...");
      console.log("Error deleting ", err);
    },
    onSuccess: (data) => {
      qCli.invalidateQueries({ queryKey: ["products"] });
      return data;
    },
  });
}
