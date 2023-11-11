// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useProdCardContext from "../../hooks/useProdCardContext";
import FormBtn from "../formBtn/formbtn";
import Spin from "../spin/spin";
import useProdDel from "../../hook/useProdDel";

function CardStockFooter() {
  const { prod } = useProdCardContext();
  const { mutate, isPending } = useProdDel();

  return (
    <footer className="card-footer home-card grid">
      <h3 className="card-footer-title stock">
        P : <em>{prod.price}</em>
      </h3>
      <h3 className="card-footer-title stock">
        Stock : <em>{prod.numberInStock}</em>
      </h3>
      <Link to={"/me/product-form"} className="_link" state={prod}>
        <FormBtn
          brand={"Update"}
          classes="card-delete add"
          btn_event={() => {}}
        />
      </Link>
      {isPending ? (
        <Spin />
      ) : (
        <FormBtn
          brand={"DELETE"}
          classes="card-delete"
          btn_event={() => mutate(prod._id)}
        />
      )}
    </footer>
  );
}

export default CardStockFooter;
