import React from "react";
import ProductCarousel from "../../components/landingPage/carousels/ProductCarousel"; // Import du carousel

const houseplants = [
    {
        id: 1,
        image: "https://via.placeholder.com/250",
        name: "Aloe Vera",
        description: "Plante purifiante",
        price: "€12.99"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/250",
        name: "Cactus Désert",
        description: "Peu d'entretien",
        price: "€8.50"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/250",
        name: "Ficus Lyrata",
        description: "Plante d'intérieur populaire",
        price: "€24.99"
    },
    {
        id: 4,
        image: "https://via.placeholder.com/250",
        name: "Monstera Deliciosa",
        description: "Grandes feuilles tropicales",
        price: "€19.99"
    },
    {
        id: 5,
        image: "https://via.placeholder.com/250",
        name: "Succulente Verte",
        description: "Facile à entretenir",
        price: "€6.99"
    },
    {
        id: 6,
        image: "https://via.placeholder.com/250",
        name: "Palmier d'Intérieur",
        description: "Apporte une touche exotique",
        price: "€29.99"
    },
    {
        id: 7,
        image: "https://via.placeholder.com/250",
        name: "Plante ZZ",
        description: "Résistante et esthétique",
        price: "€14.99"
    },
    {
        id: 8,
        image: "https://via.placeholder.com/250",
        name: "Pothos Doré",
        description: "Plante grimpante élégante",
        price: "€10.99"
    },
    {
        id: 9,
        image: "https://via.placeholder.com/250",
        name: "Fleur d'Orchidée",
        description: "Floraison délicate",
        price: "€22.50"
    },
    {
        id: 10,
        image: "https://via.placeholder.com/250",
        name: "Fougère de Boston",
        description: "Aime l'humidité",
        price: "€18.75"
    },
];

const HouseplantsCarousel: React.FC = () => {
    return (
        <section style={{padding: "40px 20px", textAlign: "center"}}>
            <h2>Nos Plantes d'Intérieur</h2>
            <p>Découvrez notre sélection de plantes d'intérieur pour embellir votre maison.</p>
            <ProductCarousel products={houseplants}/>
        </section>
    );
};

export default HouseplantsCarousel;
