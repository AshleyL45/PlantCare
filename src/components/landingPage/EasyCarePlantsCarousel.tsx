import React, {useEffect, useState} from "react";
import ProductCarousel from "../landingPage/carousels/ProductCarousel";
import {Plant} from "../../@types/plantType"; // Import de l'interface
import plantsData from "../../dataFake/plant_collection_updated.json";
import {Link} from "react-router-dom";

const EasyCarePlantsCarousel: React.FC = () => {
    const easyCarePlants = plantsData
        .filter((plant) => plant.category === "easycare plant")
        .map((plant) => ({
            id: plant.id,
            image: plant.image,
            name: plant.name,
            description: plant.description,
            price: plant.price,
        }));

    return (
        <div>
            <ProductCarousel
                products={easyCarePlants.map((plant) => ({
                    id: plant.id,
                    image: plant.image || "https://via.placeholder.com/250",
                    name: plant.name,
                    description: plant.description,
                    price: plant.price.toFixed(2) + "€", // 🔥 Convertit bien en string ici !
                }))}
            />


            {/* 🔥 Lien "Voir plus" qui redirige avec le filtre "Plantes faciles d’entretien" activé */}
            <div style={{position: "absolute", right: "3.5%"}}>
                <Link to="/products?filter=easycare">Voir plus</Link>
            </div>
        </div>
    );
};

export default EasyCarePlantsCarousel;
