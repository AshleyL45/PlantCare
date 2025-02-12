import React, {useEffect, useState} from "react";
import plantsData from "../../dataFake/plant_collection_updated.json";
import {Plant} from "../../@types/plantType";
import GenericButton from "../../components/GenericButton";
import ProductGrid from "../../components/allProductsPage/GridProduct";
import FilterProduct from "../../components/allProductsPage/FilterProduct";

interface Filters {
    indoor: boolean;
    outdoor: boolean;
    easycare: boolean;
}

interface ProductWithPrice extends Plant {
    price: string;
}

const AllProducts: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        indoor: true,
        outdoor: true,
        easycare: true,
    });
    const [allFilteredPlants, setAllFilteredPlants] = useState<ProductWithPrice[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(18);

    useEffect(() => {
        const data = plantsData as Plant[];
        const filtered = data
            .filter((plant) => {
                if (plant.category === "indoor plant" && filters.indoor) return true;
                if (plant.category === "outdoor plant" && filters.outdoor) return true;
                if (plant.category === "easycare plant" && filters.easycare) return true;
                return false;
            })
            .map((plant) => ({
                ...plant,
                price: `${(Math.random() * 20 + 5).toFixed(2)}€`,
            }));
        setAllFilteredPlants(filtered);
        setVisibleCount(18);
    }, [filters]);

    const handleFilterChange = (name: string, checked: boolean) => {
        setFilters((prev) => ({...prev, [name]: checked}));
    };

    const loadMore = () => {
        setVisibleCount((prev) => prev + 18);
    };

    return (
        <div style={{padding: "20px", textAlign: "center"}}>
            {/* Titre et description */}
            <h1>Toutes nos plantes</h1>
            <p style={{maxWidth: "800px", margin: "0 auto"}}>
                Découvrez notre large sélection de plantes pour embellir votre intérieur et votre extérieur.
                Utilisez les filtres ci-dessous pour afficher uniquement les catégories qui vous intéressent.
            </p>

            {/* Composant de filtrage */}
            <FilterProduct filters={filters} onFilterChange={handleFilterChange}/>

            {/* Grille d'affichage des produits */}
            <ProductGrid products={allFilteredPlants.slice(0, visibleCount)}/>

            {/* Bouton pour charger plus de produits */}
            {visibleCount < allFilteredPlants.length && (
                <div style={{marginTop: "20px"}}>
                    <GenericButton label="Charger plus" color="primary" onClick={loadMore}/>
                </div>
            )}
        </div>
    );
};

export default AllProducts;
