import "../Navbar.css";

const components = [
  {
    title: "Ordinateur Portable",
    items: ["Pc Portable", "Pc Portable Gamer", "Pc Portable Pro"],
  },
  {
    title: "Accessoires et Périphériques",
    items: [
      "Casque & Écouteurs",
      "Sacoche & Sac à dos",
      "Souris",
      "Claviers",
      "Ensemble Clavier et Souris",
      "Tapis de souris",
      "Refroidisseur",
      "Lecteur de cartes & Hub USB",
      "Accessoires Ecran",
      "Station d'accueil",
      "Webcam",
    ],
  },
  {
    title: "Ordinateur de Bureau",
    items: [
      "Ecran",
      "Pc de bureau",
      "Pc de Bureau Gamer",
      "Pc Tout en un",
      "Full Setup Gamer",
      "Logiciels",
      "Sécurité",
      "Microsoft",
      "Serveur informatique",
      "Onduleur",
      "Meubles Pc",
    ],
  },
  {
    title: "Composant Informatique",
    items: [
      "Disque dur Interne",
      "Afficheur",
      "Ventilateur & Refroidisseur",
      "Barrette mémoire",
      "Carte mère",
      "Carte graphique",
      "Clavier pour pc portable",
      "Chargeur pour Pc portable",
      "Boîte d'alimentation",
      "Boîtier",
      "Lecteur & Graveur",
      "Divers",
    ],
  },
];

const ComponentList = ({ show, onMouseLeave }) => {
  return (
    <div
      className={`component-container ${show ? "active" : ""}`}
      onMouseLeave={onMouseLeave}
    >
      {components.map((component, index) => (
        <div className="component" key={index}>
          <ul>
            <h2>{component.title}</h2>
            {component.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ComponentList;
