import { Link } from "react-router-dom";
import "./styles.css";
import { AiTwotoneHome } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import useAppContext from "../../hooks/useAppContext";

export default function NavBar() {
  const { cart } = useAppContext();

  return (
    <nav className="nav-cont flex-b">
      <Link to="/">
        <AiTwotoneHome size={25} color="white" className="point" />
      </Link>
      <Link to={"buy"} className=" buy-btn flex-b point">
        B
      </Link>
      <Link to="cart" className="cart">
        {cart.length > 0 && <div className="cart-badge"></div>}
        <IoMdCart size={25} color="white" className="point" />
      </Link>
      <Link to="auth">
        <FaUserCircle size={25} color="white" className="point" />
      </Link>
    </nav>
  );
}
