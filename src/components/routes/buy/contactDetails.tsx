import { FaPhoneAlt } from "react-icons/fa";

export default function ContactDetails() {
  const msg = `
    Hello there, please call us to confirm your order
    and for payment details, thank you 😉
    `;

  return (
    <section className="contact-details grid">
      <h2>Place your order now... 😊</h2>
      <p className="sales-p">{msg}</p>

      <div className="phone-cont flex-b">
        <FaPhoneAlt size={26} color={"var(--green)"} />
        <h3 className="contact">0753967330</h3>
      </div>
      <em className="sales-p info">
        Please review your cart details before submitting your order
      </em>
      <p className="sales-p thanks">Thank you for shopping with us</p>
    </section>
  );
}
