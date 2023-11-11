import "./styles.css";
import ContactDetails from "./contactDetails";
import ClientForm from "./clientForm";

export default function BuyPage() {
  return (
    <div className="home-page grid">
      <ContactDetails />
      <ClientForm />
    </div>
  );
}
