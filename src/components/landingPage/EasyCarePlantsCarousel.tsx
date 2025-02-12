import React, {useEffect, useState} from "react";
import ProductCarousel from "../landingPage/carousels/ProductCarousel";
import {Plant} from "../../@types/plantType"; // Import de l'interface
import plantsData from "../../dataFake/plant_collection_updated.json";

const EasyCarePlantsCarousel: React.FC = () => {
    const [easyCarePlants, setEasyCarePlants] = useState<
        { id: number; image: string; name: string; description: string; price: string }[]
    >([]);

    useEffect(() => {
        // Filtrer les plantes ayant un rating ≤ 5
        const filteredPlants = plantsData
            .filter((plant: any) => (plant.rating ?? 0) <= 5) // Gérer rating potentiellement undefined
            .map((plant: any) => ({
                id: plant.id,
                image: plant.image,
                name: plant.name,
                description: plant.description,
                price: `${(Math.random() * 20 + 5).toFixed(2)}€` // Générer un prix aléatoire entre 5 et 25€
            }));

        setEasyCarePlants(filteredPlants);
    }, []);

    return (
        <section>
            <ProductCarousel products={easyCarePlants}/>
        </section>
    );
};

export default EasyCarePlantsCarousel;
