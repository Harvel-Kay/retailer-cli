import { useContext } from "react";
import ProdCardContext from "../contexts/prodCardContext";

export default function useProdCardContext() {
  return useContext(ProdCardContext);
}
