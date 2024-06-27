import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";

function SecurePayment() {
  return (
    <>
      <Navbar />
      <div className="condition--navbar">
        <ul>
          <li>
            <a href="/"></a>Accueil{" "}
          </li>

          <li>|</li>
          <li> Paiement sécurisé </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default SecurePayment;
