import UserIcon from "./userIcon";
import { Link } from "react-router-dom";
import "./style.css";

function User() {
  return (
    <Link to={"/auth"} className="user-cont">
      <UserIcon classes="user-icon" />
      {/* <p className="username">@Username</p> */}
    </Link>
  );
}

export default User;
