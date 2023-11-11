import "./style.css";

interface UserProps {
  classes?: string;
}

function UserIcon({ classes }: UserProps) {
  return (
    <section className={`flex-b ${classes}`}>
      <img src={"/icons/user-e.svg"} alt="user" className="img-icon" />
    </section>
  );
}

export default UserIcon;

// <section className={`img-cont flex-b ${classes ?? ""}`}>
//   <img src={"/icons/user-e.svg"} alt="user" className="img-icon" />
// </section>;
