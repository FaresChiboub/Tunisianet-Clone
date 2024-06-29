import "../Navbar.css"; // Adjust the path as needed

// Define your Securité data
const Securité = [
    {
        id: 1,
        title: "Système d'alarme",
        components: ["Alarme Filaire", "Alarme sans fil", "Accessoires"],
    },
    {
        id: 2,
        title: "Matériel de sécurité",
        components: [
            "Caméra de surveillance",
            "Kit sécurité",
            "Enregistreur",
            "Accessoires sécurité",
            "Détecteurs et Capteurs",
        ],
    },
    {
        id: 3,
        title: "Onduleur",
        components: [],
    },
];

// Define the SecuriteList component
const SecuriteList = ({ show, onMouseLeave }) => {
    return (
        <div className={`component-container ${show ? "active" : ""}`}
        onMouseLeave={onMouseLeave}>
            {Securité.map((category) => (
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

export default SecuriteList;
