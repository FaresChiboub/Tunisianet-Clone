import {
  facebook,
  twitter,
  youtube,
  pinterest,
  instagram,
  linkedin,
  footer1,
  footer2,
  footer3,
  footer4,
  house,
  phone,
  email,
  fax,
} from "./import.js";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="brand--logo">
          <img src={facebook} alt="Facebook"></img>
          <img src={twitter} alt="Twitter"></img>
          <img src={youtube} alt="YouTube"></img>
          <img src={pinterest} alt="Pinterest"></img>
          <img src={instagram} alt="Instagram"></img>
          <img src={linkedin} alt="LinkedIn"></img>
        </div>
        <div className="footer--container">
          <div className="footer--content">
            <div className="content">
              <img src={footer1} alt="Footer1"></img>
              <p>Paiment en 12 fois</p>
            </div>
            <div className="content">
              <img src={footer2} alt="Footer2"></img>
              <p>Livraison en 24h (**) Hors confinement </p>
            </div>
            <div className="content">
              <img src={footer3} alt="Footer3"></img>
              <p>Ouvert tous les jours de 8h00 à 19h00 </p>
            </div>
            <div className="content">
              <img src={footer4} alt="Footer4"></img>
              <p>Contactez-nous au +216 31 31 00 00 </p>
            </div>
            <p className="optional--paragraph">
              (**) Livraison sur le grand Tunis & Commande passée avant 14h sinon le lendemain matin{" "}
            </p>
          </div>
        </div>
        <div className="footer-contact">
          <div className="contact">
            <h2>Notre société</h2>
            <ul>
              <li><a href="/contact-us">Contactez-nous</a></li>
              <li><a href="/about-us">A propos</a></li>
              <li><a href="/our-stores">Nos Magasins</a></li>
            </ul>
          </div>
          <div className="contact">
            <h2>Informations légales</h2>
            <ul>
              <li><a href="/delivery">Livraison</a></li>
              <li><a href="/terms-of-use">Conditions d'utilisation</a></li>
              <li><a href="/secure-payment">Paiement sécurisé</a></li>
            </ul>
          </div>
          <div className="contact">
            <h2>Votre Compte</h2>
            <ul>
              <li><a href="/personal-info">Informations personnelles</a></li>
              <li><a href="/orders">Commandes</a></li>
              <li><a href="/credits">Avoirs</a></li>
              <li><a href="/addresses">Adresses</a></li>
            </ul>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <ul>
              <li><img src={house} alt="House"></img>Tunisianet</li>
              <li>10 Rue Saint Augustin</li>
              <li>1002 Tunis</li>
              <li>Tunisia</li>
              <li><img src={phone} alt="Phone"></img>+216 31 31 00 00</li>
              <li><img src={fax} alt="Fax"></img>+216 32 40 66 06</li>
              <li><img src={email} alt="Email"></img>contact@tunisianet.com.tn</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">&copy;2024 - Tunisianet™</p>
      </footer>
    </>
  );
}

export default Footer;
