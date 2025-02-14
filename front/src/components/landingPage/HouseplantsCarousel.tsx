import {useEffect, useState} from "react";
import {fetchIndoorPlants} from "../../services/productService";
import {useNavigate} from "react-router-dom";
import ProductCarousel from "../landingPage/carousels/ProductCarousel";


type Plant = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
};

function HouseplantsCarousel() {
    const [plantsData, setPlantsData] = useState<Plant[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadPlants() {
            try {
                const data = await fetchIndoorPlants();
                setPlantsData(data);
            } catch (error) {
                console.error("Erreur lors du chargement des plantes d'intérieur :", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadPlants();
    }, []);

    const indoorPlants = plantsData.map((plant) => ({
        id: plant.id,
        image: plant.image || "https://via.placeholder.com/250", // ✅ Image par défaut si null
        name: plant.name,
        description: plant.description,
        price: plant.price.toFixed(2) + "€",
    }));

    return (
        <section style={{position: "relative", marginTop: "40px"}}>
            {/* Empêche le rendu du carousel tant que les données ne sont pas chargées */}
            {isLoading ? (
                <p>Chargement des plantes...</p>
            ) : (
                <>
                    {/* Carousel intact avec les nouvelles données */}
                    <ProductCarousel products={indoorPlants}/>

                    {/* Lien "Voir plus" qui redirige avec le filtre "Plantes d'intérieur" activé */}
                    <div style={{position: "absolute", right: "3.5%"}}>
                        <span
                            style={{cursor: "pointer", color: "#1976d2", fontWeight: "bold"}}
                            onClick={() => navigate("/products?filter=indoor")}
                        >
                            Voir plus
                        </span>
                    </div>
                </>
            )}
        </section>
    );
}

export default HouseplantsCarousel;
