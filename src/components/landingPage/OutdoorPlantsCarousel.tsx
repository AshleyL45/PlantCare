import React from "react";
import ProductCarousel from "./carousels/ProductCarousel";

const outdoorPlants = [
    {
        id: 1,
        image: "https://via.placeholder.com/180",
        name: "Lavande",
        description: "Aromatique et résistante",
        price: "€9.99"
    },
    {
        id: 2,
        image: "https://via.placeholder.com/180",
        name: "Olivier",
        description: "Parfait pour une terrasse",
        price: "€29.50"
    },
    {
        id: 3,
        image: "https://via.placeholder.com/180",
        name: "Bambou",
        description: "Apporte une touche zen",
        price: "€19.99"
    },
    {
        id: 4,
        image: "https://via.placeholder.com/180",
        name: "Hortensia",
        description: "Floraison généreuse",
        price: "€14.99"
    },
    {id: 5, image: "https://via.placeholder.com/180", name: "Jasmin", description: "Parfum envoûtant", price: "€12.50"},
    {
        id: 6,
        image: "https://via.placeholder.com/180",
        name: "Rosier",
        description: "Fleurs colorées et élégantes",
        price: "€17.99"
    },
    {
        id: 7,
        image: "https://via.placeholder.com/180",
        name: "Lierre",
        description: "Plante grimpante résistante",
        price: "€8.99"
    },
    {
        id: 8,
        image: "https://via.placeholder.com/180",
        name: "Cyprès",
        description: "Idéal pour haies et jardins",
        price: "€22.99"
    },
];

const OutdoorPlantsCarousel: React.FC = () => {
    return (
        <section>
            <ProductCarousel products={outdoorPlants}/>
        </section>
    );
};

export default OutdoorPlantsCarousel;
