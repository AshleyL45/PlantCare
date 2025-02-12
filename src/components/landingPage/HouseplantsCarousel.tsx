import React from "react";
import {useNavigate} from "react-router-dom";
import ProductCarousel from "../../components/landingPage/carousels/ProductCarousel";
import plantsData from "../../dataFake/plant_collection_updated.json";

const HouseplantsCarousel: React.FC = () => {
    const navigate = useNavigate();

    // Filtrer uniquement les plantes d'intérieur
    const indoorPlants = plantsData
        .filter((plant) => plant.category === "indoor plant")
        .map((plant) => ({
            id: plant.id,
            image: plant.image || "https://via.placeholder.com/250", // ✅ Image par défaut si null
            name: plant.name,
            description: plant.description,
            price: plant.price.toFixed(2) + "€", // 🔥 Convertir price en string
        }));

    return (
        <section style={{position: "relative", marginTop: "40px"}}>
            {/* Carousel des plantes */}
            <ProductCarousel products={indoorPlants}/>

            {/* 🔥 Lien "Voir plus" qui redirige avec le filtre "Plantes d'intérieur" activé */}
            <div style={{position: "absolute", right: "3.5%"}}>
                <span
                    style={{cursor: "pointer", color: "#1976d2", fontWeight: "bold"}}
                    onClick={() => navigate("/products?filter=indoor")}
                >
                    Voir plus
                </span>
            </div>
        </section>
    );
};

export default HouseplantsCarousel;
