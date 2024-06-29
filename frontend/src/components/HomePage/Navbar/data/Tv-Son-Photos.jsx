import "../Navbar.css"; // Adjust the path as needed

// Define your TvSonPhotos data
const TvSonPhotos = [
 
  {
    id: 2,

    title: "Vidéoprojecteurs",
    components: ["Vidéoprojecteurs", "Accessoires pour Vidéoprojecteurs"],
  },
  {
    id: 3,
    title: "Consoles & Jeux",
    components: ["Consoles", "Manettes de Jeux", "Accessoires pour Consoles"],
  },
  {
    id: 4,
    title: "Téléviseurs",
    components: [
      "Téléviseurs",
      "Accessoires pour téléviseurs",
      "Récepteur / Abonnement",
      "Récepteur",
      "Accessoires pour Récepteurs",
      "Abonnement Récepteur",
      "Instrument de musique",
    ],
  },

  {
    id: 6,
    title: "Appareils Photos",
    components: ["Appareils Photos", "Accessoires pour Appareils Photos"],
  },
  {
    id: 7,
    title: "Piles et Chargeurs",
    components: ["Piles", "Chargeurs", "Torches"],
  },
  {
    id: 8,
    title: "SON",
    components: [
      "Ensemble Home Cinéma",
      "Barre de son",
      "Casque & Écouteurs",
      "Haut-Parleur",
      "Radio - Réveil",
      "Chaîne Stéréo",
      "Microphone",
      "Montres"
    ],
  },
];

// Define the TvSonPhotosList component
const TvSonPhotosList = ({ show, onMouseLeave }) => {
  return (
    <div
      className={`component-container ${show ? "active" : ""}`}
      onMouseLeave={onMouseLeave}
    >
      {TvSonPhotos.map((category) => (
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

export default TvSonPhotosList;
