import React, {useEffect, useState} from "react";
import ProductCarousel from "../../components/landingPage/carousels/ProductCarousel";
import plantsData from "../../dataFake/plant_collection_updated.json";
import {Plant} from "../../@types/plantType";
import {useNavigate} from "react-router-dom";


const OutdoorPlantsCarousel: React.FC = () => {
    const navigate = useNavigate();

    // Filtrer les plantes d'extérieur
    const outdoorPlants = plantsData
        .filter((plant) => plant.category === "outdoor plant")
        .map((plant) => ({
            id: plant.id,
            image: plant.image || "https://via.placeholder.com/250", // ✅ Remplace null par une image par défaut
            name: plant.name,
            description: plant.description,
            price: plant.price.toFixed(2) + "€", // 🔥 Convertir price en string avec 2 décimales
        }));

    return (
        <section style={{position: "relative", marginTop: "40px"}}>
            {/* Carousel des plantes */}
            <ProductCarousel products={outdoorPlants}/>

            {/* 🔥 Lien "Voir plus" qui redirige avec le filtre "Plantes d'extérieur" activé */}
            <div style={{position: "absolute", right: "3.5%"}}>
                <span
                    style={{cursor: "pointer", color: "#1976d2", fontWeight: "bold"}}
                    onClick={() => navigate("/products?filter=outdoor")}
                >
                    Voir plus
                </span>
            </div>
        </section>
    );
};

export default OutdoorPlantsCarousel;
