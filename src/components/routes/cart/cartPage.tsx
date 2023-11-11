import useAppContext from "../../../hooks/useAppContext";
import Empty from "../../empyty/empty";
import PageHead from "../../page header/pageHead";
import ProdCard from "../../product card/prodCard";
import "./styles.css";

export default function CartPage() {
  const { cart } = useAppContext();
  return (
    <div className="home-page grid cart-page">
      <PageHead title="Your Retailer Cart ...🤑🤑🤑" classes="cart-head" />
      {cart.length === 0 && <Empty />}
      {cart.map((prod) => (
        <ProdCard key={prod._id} prod={prod} />
      ))}
    </div>
  );
}
