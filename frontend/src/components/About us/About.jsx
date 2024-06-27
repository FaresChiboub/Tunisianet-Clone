import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import presentation from "../../assets/Images/About us/presentation.gif";
import "./About.css";

function About() {
  }
  return (
    <>
      <div>
        <Navbar />

        <div className="mini--navbar">
          <ul>
            <li><a href="/"></a>Accueil </li>
            <li>|</li>
            <li>
              Informatique Tunisie, boutique de vente de matériels informatiques
              en Tunisie - Tunisianet
            </li>
          </ul>
        </div>
        <h2 className="aboutUs--title">
          Informatique Tunisie, boutique de vente de matériels informatiques en
          Tunisie - Tunisianet{" "}
        </h2>
        <hr className="aboutUs--title-hr" />
        <br />
        <div className="aboutUs--container">
          <div className="aboutUs--content">
            <img src={presentation}></img>
            <h2>Notre entreprise</h2>
            <p>
              Tunisianet est Le spécialiste de la vente en ligne en Tunisie.
              Nous disposons du plus grand choix et des meilleurs prix en
              Tunisie. Tunisianet travaille avec les plus grandes marques qui
              lui font entièrement confiance. Par ailleurs Tunisianet a un
              contrat de Retailer HP au même titre que la grande distribution
              (Carrefour, Geant) ainsi qu’un contrat avec Dell : Partner
              Registred Dell, Asus : Gold Partner, Lenovo : Gold Partner.
              Tunisianet s’est toujours engagé à servir ses clients au mieux et
              à donner les meilleurs conseils. Enfin et c'est loin d'être
              négligeable, Tunisianet s'appuie sur une chaîne logistique
              optimisée, afin de permettre d'offrir des prix défiant toute
              concurrence sur de nombreuses références pour des livraisons sur
              tout le territoire Tunisien. La livraison est gratuite à partir de
              300 DT d'achats.
            </p>
            <h2>Conseil avant vente</h2>
            <p>
              Vous hésitez dans le choix du produit le plus adapté à votre
              besoin ? Nos conseillers techniques sont à votre disposition pour
              vous aider à faire le meilleur choix, du lundi au vendredi de 08h
              à 19H et le samedi de 8H à 14H, hors jours fériés, au 31 31 00 00
            </p>
            <h2>Comment Acheter ?</h2>
            <h3>Comment payer :</h3>
            <p>
              Paiement par carte bancaire Paiement par chèque (Possibilité en
              trois fois) Paiement en espèces Paiement par crédit bancaire
              Paiement par virement
            </p>
            <h3>Comment commander :</h3>
            <p>
              Se déplace à notre siège à Tunis Se faire livrer partout en
              Tunisie contre remboursement (paiement à la livraison et la
              livraison est gratuite à partir de 300 DT d'achats). Commander
              directement sur notre site web, payer par carte bancaire et se
              faire livrer à domicile par Rapid Poste.
            </p>
            <h3>SAV</h3>
            <p>
              Tous nos produits sont garantis contre les vices de fabrication
              pour une durée minimum d’une année. Nous proposons également des
              modèles professionnels pouvant aller jusqu’à 5 années de garantie.
              L’assurance du « zéro litige » Une question ? Un problème ?
              Contactez-nous on s’occupe de tout ! Nous travaillons avec les
              plus grands centres de maintenances des grandes marques à Tunis,
              Sfax et Sousse.
            </p>
            <h2>Sécurité des transactions</h2>
            <p>
              Lors d'un paiement par carte bancaire, vous bénéficiez du système
              de sécurité de l’entreprise nationale Monétique Tunisie La
              transaction se fait entre vous et Monétique Tunisie, reconnu pour
              sa fiabilité en matière de transactions sur Internet. La
              transaction est cryptée (procédé de cryptage SSL). Donner son
              numéro de carte bancaire sur Monétique Tunisie est sans danger. Le
              site utilise une procédure sécurisée, reconnaissable par deux
              indicateurs : Un petit cadenas sur Internet Explorer, et
              l’équivalent pour les autres navigateurs au bas de votre écran. Le
              http:// de l'adresse du site devient https:// (« s » signifie
              sécurisé). Les informations sont cryptées, donc protégées avant
              leur transfert via Internet. Aucun numéro de carte bancaire n'est
              stocké chez Tunisianet.
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default About;
