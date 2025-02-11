import React from "react";
import ProductCarousel from "../landingPage/carousels/ProductCarousel"; // Réutilisation du carousel générique

const easyCarePlants = [
    {
        id: 1,
        image: "https://via.placeholder.com/180",
        name: "Sansevieria",
        description: "Plante robuste et résistante",
        price: "€15.99"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/180",
        name: "Zamioculcas",
        description: "Peu d’arrosage nécessaire",
        price: "€18.50"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/180",
        name: "Pothos Doré",
        description: "S’adapte à toutes les conditions",
        price: "€12.99"
    },
    {
        id: 4,
        image: "https://via.placeholder.com/180",
        name: "Cactus Euphorbia",
        description: "Supporte la sécheresse",
        price: "€10.99"
    },
    {
        id: 5,
        image: "https://via.placeholder.com/180",
        name: "Aloe Vera",
        description: "Facile à entretenir et bénéfique",
        price: "€14.50"
    },
    {
        id: 6,
        image: "https://via.placeholder.com/180",
        name: "Ficus Elastica",
        description: "Plante d’intérieur peu exigeante",
        price: "€22.99"
    },
    {
        id: 7,
        image: "https://via.placeholder.com/180",
        name: "Dracaena Marginata",
        description: "Apporte une touche tropicale",
        price: "€19.99"
    },
    {
        id: 8,
        image: "https://via.placeholder.com/180",
        name: "Chlorophytum",
        description: "Dépolluante et résistante",
        price: "€11.99"
    },
];

const EasyCarePlantsCarousel: React.FC = () => {
    return (
        <section style={{padding: "40px 20px", textAlign: "center"}}>
            <h2>Nos plantes faciles d’entretien</h2>
            <p>Découvrez notre sélection de plantes qui demandent peu d’attention et sont idéales pour les
                débutants.</p>
            <ProductCarousel products={easyCarePlants}/>
        </section>
    );
};

export default EasyCarePlantsCarousel;
