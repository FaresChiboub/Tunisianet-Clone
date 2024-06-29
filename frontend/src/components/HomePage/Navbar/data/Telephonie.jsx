import "../Navbar.css"; // Adjust the path as needed

// Define your Telephonie data
const Telephonie = [
    {
        id: 1,
        title: "Téléphone Portable",
        components: ["Smartphone", "Téléphone Fixe"],
    },
    {
        id: 2,
        title: "Tablette tactile",
        components: [
            "Tablette",
            "Tablette Graphique",
            "Etui de protection pour tablette",
            "Chargeur et Câble pour tablette",
            "Film de protection pour tablette",
            "Divers pour tablette",
        ],
    },
    {
        id: 3,
        title: "Accessoires Téléphones",
        components: [
            "Etui de protection pour Téléphones",
            "Film de protection pour Smartphones",
            "Chargeurs et Câbles pour Téléphones",
            "Power Bank",
            "Divers pour Téléphones",
            "SmartWatch",
        ],
    },
];

// Define the TelephonieList component
const TelephonieList = ({ show, onMouseLeave }) => {
    return (
        <div className={`component-container ${show ? "active" : ""}`}
        onMouseLeave={onMouseLeave}>
            {Telephonie.map((category) => (
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

export default TelephonieList;
