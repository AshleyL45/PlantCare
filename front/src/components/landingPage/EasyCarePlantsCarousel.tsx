import {useEffect, useState} from "react";
import {fetchEasyCarePlants} from "../../services/productService";
import {useNavigate} from "react-router-dom";
import ProductCarousel from "./carousels/ProductCarousel";


type Plant = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
};

function EasyCarePlantsCarousel() {
    const [plantsData, setPlantsData] = useState<Plant[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadPlants() {
            try {
                const data = await fetchEasyCarePlants();
                setPlantsData(data);
            } catch (error) {
                console.error("Erreur lors du chargement des plantes faciles d'entretien :", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadPlants();
    }, []);

    const easyCarePlants = plantsData.map((plant) => ({
        id: plant.id,
        image: plant.image || "https://via.placeholder.com/250",
        name: plant.name,
        description: plant.description,
        price: plant.price.toFixed(2) + "€",
    }));

    return (
        <section style={{position: "relative", marginTop: "40px"}}>
            {isLoading ? (
                <p>Chargement des plantes...</p>
            ) : (
                <>
                    <ProductCarousel products={easyCarePlants}/>

                    {/* Lien "Voir plus" qui redirige avec le filtre "EasyCare" activé */}
                    <div style={{position: "absolute", right: "3.5%"}}>
                        <span
                            style={{cursor: "pointer", color: "#1976d2", fontWeight: "bold"}}
                            onClick={() => navigate("/products?filter=easycare")}
                        >
                            Voir plus
                        </span>
                    </div>
                </>
            )}
        </section>
    );
}

export default EasyCarePlantsCarousel;
