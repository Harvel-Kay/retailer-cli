import { FaUserTie } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import FormBtn from "../../formBtn/formbtn";
import store from "../../../services/storage";
import "./styles.css";

export default function Logout() {
  const onLogout = () => {
    store.removeUser();
    window.location.replace("auth");
  };
  const user = store.user();
  return (
    <div className="logout-cont grid">
      <div className="user-tie-cont">
        <FaUserTie size={120} color={"orangered"} />
      </div>

      {user && (
        <>
          <IoMdLogOut size={40} color={"orange"} className="logout-icon" />
          <FormBtn
            brand="Logout"
            btn_event={() => onLogout()}
            classes="logout-btn"
          />
        </>
      )}
    </div>
  );
}
