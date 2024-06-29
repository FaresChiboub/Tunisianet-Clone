import "../Navbar.css"; // Adjust the path as needed

// Define your Electroménager data
const Electroménager = [
  {
    id: 2,
    title: "Gros Electro Cuisine",
    components: [
      "Réfrigérateurs",
      "Congélateurs",
      "Hottes",
      "Encastrable / Cuisinière",
      "Fontaine Fraîche",
      "Climatisation",
      "Chauffage"
    ],
  },
  {
    id: 3,
    title: "Gros Electro Lavage",
    components: ["Machine à laver / Sèche Linge", "Lave vaisselle"],
  },
  {
    id: 5,
    title: "Petit Electro Cuisine",
    components: [
      "Grille-pain",
      "Appareil de cuisson / Convivial",
      "Mini four électrique / Micro-onde",
      "Balance de cuisine",
      "Mixeurs / Blenders",
      "Hachoirs",
      "Batteurs",
      "Centrifugeuses",
      "Presse Agrumes / Légumes",
      "Robots multifonction",
      "Cafetières et moulin à café",
    ],
  },
  {
    id: 6,
    title: "Entretien – Soin",
    components: [
      "Aspirateur - Nettoyeur Vapeur",
      "Repassage & Accessoires",
      "Beauté Masculine",
      "Beauté Féminine",
      "Santé connectée - Bien être - Massage",
      "Machine à coudre",
      "Ventilateurs",
      "Scooter Electriques",
    ],
  },
];

// Define the ElectromenagerList component
const ElectromenagerList = ({ show, onMouseLeave }) => {
  return (
    <div
      className={`component-container ${show ? "active" : ""}`}
      onMouseLeave={onMouseLeave}
    >
      {Electroménager.map((category) => (
        <div className="component" key={category.id}>
          <ul>
            <h2>{category.title}</h2>
            {category.components.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ElectromenagerList;
