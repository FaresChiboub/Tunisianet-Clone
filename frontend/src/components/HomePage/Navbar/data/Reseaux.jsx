import "../Navbar.css"; // Adjust the path as needed

// Define your Reseaux data
const Reseaux = [
    {
        id: 1,
        title: "Réseau",
        components: [
            "Switch / Routeurs / Point d'accès",
            "Carte Réseau",
            "Clé Wifi - Bluetooth",
            "CPL",
            "Coffrets et Armoires Réseau",
            "Multiprise",
            "Accessoires Réseau",
            "Abonnements Internet",
        ],
    },
    {
        id: 2,
        title: "Câbles et Connectiques",
        components: [
            "Câbles HDMI",
            "Câbles USB",
            "Câbles Réseau",
            "Câbles Firewire",
            "Câbles Ecrans TV / AUDIO / DVD",
            "Câbles Alimentation",
            "Adaptateurs / Convertisseurs",
        ],
    },
    {
        id: 3,
        title: "Coffrets et Accessoires",
        components: ["Coffrets et Armoires Réseau", "Accessoires"],
    },
];

// Define the ReseauxList component
const ReseauxList = ({ show, onMouseLeave }) => {
    return (
        <div className={`component-container ${show ? "active" : ""}`} onMouseLeave={onMouseLeave}>
            {Reseaux.map((category) => (
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

export default ReseauxList;
