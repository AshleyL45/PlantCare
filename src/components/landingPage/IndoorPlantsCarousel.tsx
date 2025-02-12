import React, {useEffect, useState} from "react";
import ProductCarousel from "../../components/landingPage/carousels/ProductCarousel";
import plantsData from "../../dataFake/plant_collection_updated.json";
import {Plant} from "../../@types/plantType";
import { Link } from "react-router-dom";

const IndoorPlantsCarousel: React.FC = () => {
    // Filtrer les plantes de la catégorie "indoor plant"
    const indoorPlants = plantsData
        .filter((plant: any) => plant.category === "indoor plant")
        .map((plant: any) => ({
            id: plant.id,
            image: plant.image || "https://via.placeholder.com/250", // Fallback image
            name: plant.name,
            description: plant.description,
            price: `${(Math.random() * 20 + 5).toFixed(2)}€`, // Prix aléatoire entre 5€ et 25€
        }));

    return (
        <section style={{textAlign: "center", paddingBottom: "100px", position: "relative"}}>
            {/* Affichage du carousel */}
            <ProductCarousel products={indoorPlants}/>

            {/* 🔥 Lien "Voir plus" qui redirige avec le filtre "Plantes d'intérieur" activé */}
            <div style={{position: "absolute", right: "3.5%"}}>
                <Link
                    to={{pathname: "/products", search: "?filter=indoor"}}
                    style={{
                        textDecoration: "none",
                        color: "#1976d2",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "color 0.3s"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = "#0d47a1"}
                    onMouseOut={(e) => e.currentTarget.style.color = "#1976d2"}
                >
                    Voir plus
                </Link>
            </div>
        </section>
    );
};

export default IndoorPlantsCarousel;