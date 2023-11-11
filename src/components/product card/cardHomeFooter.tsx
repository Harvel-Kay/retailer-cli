import FormBtn from "../formBtn/formbtn";
import CartSelected from "./cardSelect";
import useProdCardContext from "../../hooks/useProdCardContext";
import useAppContext from "../../hooks/useAppContext";
import useProdCache from "../../hook/useProdCache";

function CardHomeFooter() {
  const { prod } = useProdCardContext();
  const { cart, setCart } = useAppContext();
  const products = useProdCache();

  const updateCart = () => {
    const cloneCart = [...cart];
    const prods = [...products];
    const exists = prods.find((p) => p._id === prod._id) as any;

    if (exists.qty) {
      exists.qty++;
    } else exists.qty = 1;
    const inCart = cloneCart.find((p) => p._id === prod._id);
    if (!inCart) cloneCart.push(exists);
    exists.numberInStock--;

    setCart(cloneCart);
  };

  const delProd = () => {
    const cloneCart = [...cart];
    const exists = cloneCart.find((p) => p._id === prod._id) as any;

    if (exists.qty > 0) {
      exists.qty--;
      exists.numberInStock++;
    }

    if (exists.qty <= 0) setCart(cloneCart.filter((p) => p._id !== exists._id));
    else setCart(cloneCart.map((p) => (p._id === exists._id ? exists : p)));
  };

  const inCart = () => {
    const selected = cart.find((p) => p._id === prod._id);

    return selected && selected.qty && selected.qty > 0 ? false : true;
  };

  const outOfStock = () => {
    return prod.numberInStock <= 0;
  };

  return (
    <footer className="card-footer home-card grid">
      <h3 className="card-footer-title">
        P : <em>{prod.price}</em>
      </h3>
      <FormBtn
        brand={`${outOfStock() ? "Out of Stock" : "Add to Cart"}`}
        classes={`card-delete add ${outOfStock() && "out-of-stock"} `}
        btn_event={updateCart}
        disabled={outOfStock()}
      />
      <CartSelected />
      <FormBtn
        brand={"Remove"}
        classes="card-delete"
        btn_event={delProd}
        disabled={inCart()}
      />
    </footer>
  );
}

export default CardHomeFooter;
