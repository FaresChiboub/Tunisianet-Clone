import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import "./SecurePayment.css";
function SecurePayment() {
  return (
    <>
      <Navbar />
      <div className="securePayment--navbar">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>

          <li>|</li>
          <li> Paiement sécurisé </li>
        </ul>
      </div>
      <div className="securePayment--title">
        <h2>Paiement sécurisé </h2>
        <br />
        <hr className="securePayment--title--hr"></hr>
      </div>
      <div className="securePayment--content">
        <h3>Paiement sécurisé</h3>
        <h2>Notre paiement sécurisé</h2>
        <p>Avec SSL</p>
        <h2>Avec Visa/Mastercard/Paypal</h2>
        <p>A propos de ce service</p>
      </div>
      <Footer />
    </>
  );
}

export default SecurePayment;
