import "../Navbar.css"; // Adjust the path as needed

// Define your Stockage data
const Stockage = [
    {
        id: 1,
        title: "Disques Internes",
        components: [
            "Disques Internes Standards",
            "Disque SSD",
            "Disques Internes pour Serveur de Stockage",
            "Disques Internes pour Vidéosurveillance",
        ],
    },
    {
        id: 2,
        title: "Disque Dur externe",
        components: ["Serveur de stockage", "Accessoires pour Stockage"],
    },
    {
        id: 3,
        title: "Clé USB",
        components: ["Clé USB", "Carte mémoire", "CD et DVD Vierge"],
    },
];

// Define the StockageList component
const StockageList = ({ show, onMouseLeave }) => {
    return (
        <div className={`component-container ${show ? "active" : ""}`}
        onMouseLeave={onMouseLeave}>
            {Stockage.map((category) => (
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

export default StockageList;
