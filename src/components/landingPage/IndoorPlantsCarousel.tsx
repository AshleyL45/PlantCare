import React, {useEffect, useState} from "react";
import ProductCarousel from "../../components/landingPage/carousels/ProductCarousel";
import plantsData from "../../dataFake/plant_collection_updated.json";
import {Plant} from "../../@types/plantType";

interface ProductWithPrice extends Plant {
    price: string;
}

const IndoorPlantsCarousel: React.FC = () => {
    const [indoorPlants, setIndoorPlants] = useState<ProductWithPrice[]>([]);

    useEffect(() => {
        // On force le typage du JSON en Plant[]
        const data = plantsData as Plant[];
        // Filtrer les plantes dont la catégorie est exactement "indoor plant"
        const filteredPlants = data
            .filter((plant) => plant.category === "indoor plant")
            .map((plant) => ({
                ...plant,
                price: `${(Math.random() * 20 + 5).toFixed(2)}€` // Génère un prix aléatoire entre 5€ et 25€
            }));
        setIndoorPlants(filteredPlants);
    }, []);

    return (
        <section>
            <ProductCarousel products={indoorPlants}/>
        </section>
    );
};

export default IndoorPlantsCarousel;