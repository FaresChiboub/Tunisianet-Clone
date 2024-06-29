import "../Navbar.css"; // Adjust the path as needed

// Define your Impression data
const Impression = [
    {
        id: 1,
        title: "Imprimantes",
        components: [
            "Imprimante à réservoir intégré",
            "Imprimante et Multifonction Jet d'encre",
            "Imprimante et Multifonction Laser",
            "Imprimante professionnelle",
            "Imprimante point de vente",
            "Accessoires Imprimantes",
            "Fax",
            "Scanners",
        ],
    },
    {
        id: 2,
        title: "Photocopieurs",
        components: [
            "Photocopieurs A4 | A3",
            "Accessoires photocopieurs",
            "Papier",
            "Papier A4",
            "Papier A3",
            "Enveloppe",
            "Papier Photo",
        ],
    },
    {
        id: 3,
        title: "Consommables",
        components: ["Originales", "Adaptables"],
    },
];

// Define the ImpressionList component
const ImpressionList = ({ show, onMouseLeave }) => {
    return (
        <div className={`component-container ${show ? "active" : ""}`}
        onMouseLeave={onMouseLeave}>
            {Impression.map((category) => (
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

export default ImpressionList;
