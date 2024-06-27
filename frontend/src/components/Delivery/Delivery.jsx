import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import "./Delivery.css";
function Delivery() {
  return (
    <>
      <Navbar />
      <div className="delivery--navbar">
        <ul>
        <li><a href="/">Accueil</a></li>
          <li>|</li>
          <li>Livraison</li>
        </ul>
      </div>

      <div className="delivery--title">
        <h2>Livraison</h2>
        <br />
        <hr />
      </div>
      <div className="delivery--content">
        <h3>Expéditions et retours</h3>
        <h2>Expédition de votre colis</h2>
        <p>
          Les colis sont généralement expédiés dans un délai de 2 jours après
          réception du paiement. Ils sont expédiés via UPS avec un numéro de
          suivi et remis sans signature. Les colis peuvent également être
          expédiés via UPS Extra et remis contre signature. Veuillez nous
          contacter avant de choisir ce mode de livraison, car il induit des
          frais supplémentaires. Quel que soit le mode de livraison choisi, nous
          vous envoyons un lien pour suivre votre colis en ligne.
        </p>
        <br />
        <p>
          Les frais d'expédition incluent les frais de préparation et
          d'emballage ainsi que les frais de port. Les frais de préparation sont
          fixes, tandis que les frais de transport varient selon le poids total
          du colis. Nous vous recommandons de regrouper tous vos articles dans
          une seule commande. Nous ne pouvons regrouper deux commandes placées
          séparément et des frais d'expédition s'appliquent à chacune d'entre
          elles. Votre colis est expédié à vos propres risques, mais une
          attention particulière est portée aux objets fragiles.
        </p>
        <br />
        <p>
          Les dimensions des boîtes sont appropriées et vos articles sont
          correctement protégés.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Delivery;
