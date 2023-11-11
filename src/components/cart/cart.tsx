import { Link } from "react-router-dom";
import "./style.css";
import useAppContext from "../../hooks/useAppContext";

function Cart() {
  const { cart } = useAppContext();
  return (
    <div className="cart">
      <Link className="cart-cont" to={"/cart"}>
        <section className="cart-img">
          <img src="/icons/Cart.svg" alt="cart" />
        </section>
        <div className="cart-tag-cont icon-sm flex-b">
          <p className=" cart-tag">{cart.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default Cart;
