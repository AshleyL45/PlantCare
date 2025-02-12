import React, {useEffect, useState} from "react";
import plantsData from "../../dataFake/plant_collection_updated.json";
import GenericButton from "../../components/GenericButton";
import ProductGrid from "../../components/allProductsPage/GridProduct";
import FilterProduct from "../../components/allProductsPage/FilterProduct";
import {useLocation} from "react-router-dom";

// Interface des produits
interface Plant {
    id: number;
    name: string;
    latin_name: string;
    description: string;
    quantity: number;
    care_type: string[];
    category: "indoor plant" | "easycare plant" | "outdoor plant";
    rating: number;
    size: string;
    pet_friendly: boolean;
    image: string;
    price: number; // ✅ Correction : price est maintenant un number
}



const AllProducts: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter");

    const [filters, setFilters] = useState({
        indoor: false,
        outdoor: false,
        easycare: false,
    });

    const [visibleCount, setVisibleCount] = useState(18);

    useEffect(() => {
        if (filterParam === "indoor") {
            setFilters({indoor: true, outdoor: false, easycare: false});
        } else if (filterParam === "outdoor") {
            setFilters({indoor: false, outdoor: true, easycare: false});
        } else if (filterParam === "easycare") {
            setFilters({indoor: false, outdoor: false, easycare: true});
        }
    }, [filterParam]);

    const handleFilterChange = (name: string, checked: boolean) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const filteredPlants = plantsData.filter((plant) => {
        if (filters.indoor && plant.category === "indoor plant") return true;
        if (filters.outdoor && plant.category === "outdoor plant") return true;
        if (filters.easycare && plant.category === "easycare plant") return true;
        return false;
    });

    return (
        <div style={{padding: "20px", textAlign: "center"}}>
            <h1>Toutes nos plantes</h1>
            <p>Découvrez toutes nos variétés de plantes adaptées à vos besoins.</p>

            {/* Filtres */}
            <FilterProduct filters={filters} onFilterChange={handleFilterChange}/>

            {/* Grille d'affichage des produits */}
            <ProductGrid
                products={filteredPlants.slice(0, visibleCount).map((plant) => ({
                    id: plant.id,
                    image: plant.image || "https://via.placeholder.com/250", // ✅ Remplace null par une image par défaut
                    name: plant.name,
                    price: plant.price, // ✅ `price` reste un `number`
                }))}
            />

            {/* Bouton "Voir plus" pour charger plus de produits */}
            {filteredPlants.length > 18 && <GenericButton label="Voir plus"/>}
        </div>
    );
};

export default AllProducts;

