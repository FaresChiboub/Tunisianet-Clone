import "../Navbar.css"; // Adjust the path as needed

const Bureautique = [
    {
        id: 1,
        title: "Matériel point de vente",
        components: [
            "Tiroirs Caisses et Coffres-forts",
            "Caisses Enregistreuses",
            "Douchettes",
            "Destructeurs de papiers",
            "Perforelieuses",
            "Imprimante point de vente",
            "Plastifieuses",
            "Compteuse de billets",
            "Papier",
            "Papier A4",
            "Papier A3",
            "Papier Photo",
            "Enveloppe"
        ]
    },
    {
        id: 2,
        title: "Ecriture & Correction",
        components: [
            "Stylos à bille",
            "Stylos premium",
            "Stylos confort",
            "Stylos Pointe Fine",
            "Stylos feutre",
            "Crayons & Porte-mines",
            "Surligneurs",
            "Marqueurs",
            "Correction",
            "Recharge Stylos et feutres",
            "Accessoires de bureau",
            "Règles",
            "Porte-stylos",
            "Loupes",
            "Cachets & Tampons",
            "Accessoires",
            "Cadenas"
        ]
    },
    {
        id: 3,
        title: "Classement & Archivage",
        components: [
            "Boîtes de classement",
            "Chemises & Sous-chemises",
            "Classeurs",
            "Portes documents",
            "Corbeilles à courrier",
            "Corbeilles",
            "Trieur",
            "Cahiers, blocs et feuilles",
            "Cahiers & Bloc-notes",
            "Post-it - Pense bête",
            "Etiquettes",
            "Calculatrices",
            "Nettoyage",
            "Décoration",
            "Bagageries"
        ]
    },
    {
        id: 4,
        title: "Adhésifs, Agrafage & Découpe",
        components: [
            "Découpe",
            "Agrafage",
            "Perforateur",
            "Colles",
            "Rouleau scotch",
            "Reliure & Spiral",
            "Trombones & Pinces",
            "Punaises & Épingles",
            "Elastiques"
        ]
    },
    {
        id: 5,
        title: "Tableaux",
        components: [
            "Tableaux en Liège",
            "Tableaux Blancs",
            "Tableaux Vitrine",
            "Tableaux à Craie",
            "Accessoires tableaux"
        ]
    }
];

// Define the BureautiqueList component
const BureautiqueList = ({ show, onMouseLeave }) => {
    return (
        <div className={`component-container ${show ? "active" : ""}`} onMouseLeave={onMouseLeave}>
            {Bureautique.map((category) => (
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

export default BureautiqueList;
