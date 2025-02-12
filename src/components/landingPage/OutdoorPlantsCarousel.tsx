import React, {useEffect, useState} from "react";
import ProductCarousel from "../../components/landingPage/carousels/ProductCarousel";
import plantsData from "../../dataFake/plant_collection_updated.json";
import {Plant} from "../../@types/plantType";

interface ProductWithPrice extends Plant {
    price: string;
}

const OutdoorPlantsCarousel: React.FC = () => {
    const [outdoorPlants, setOutdoorPlants] = useState<ProductWithPrice[]>([]);

    useEffect(() => {
        const data = plantsData as Plant[];
        const filteredPlants = data
            .filter((plant) => plant.category === "outdoor plant")
            .map((plant) => ({
                ...plant,
                price: `${(Math.random() * 20 + 5).toFixed(2)}€`
            }));
        setOutdoorPlants(filteredPlants);
    }, []);

    return (
        <section>
            <ProductCarousel products={outdoorPlants}/>
        </section>
    );
};

export default OutdoorPlantsCarousel;
