import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchProductById} from "../../services/productService";
import ProductImage from "../../components/productDetailsPage/ProductImage";
import ProductDetailsSection from "../../components/productDetailsPage/ProductDetailsSection";
import ProductDetailsDescription from "../../components/productDetailsPage/ProductDetailsDescription";


type Product = {
    id: number;
    name: string;
    latin_name: string;
    description: string;
    category: string;
    size: string;
    pet_friendly: boolean;
    rating: number;
    price: number;
    image: string;
    care_type: string[];
};

function ProductDetails() {
    const {id} = useParams<{ id: string }>();
    const [plant, setPlant] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            if (!id) return;
            try {
                const data = await fetchProductById(parseInt(id, 10));
                setPlant(data);
            } catch (error) {
                console.error("Erreur lors de la récupération du produit :", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    if (isLoading) return <p>Chargement du produit...</p>;
    if (!plant) return <p>Produit introuvable</p>;

    return (
        <div className="product-details">
            <ProductImage imageUrl={plant.image}/>

            <ProductDetailsSection
                name={plant.name}
                latinName={plant.latin_name}
                category={plant.category}
                price={`${plant.price.toFixed(2)}€`}
                size={plant.size}
                petFriendly={plant.pet_friendly}
                rating={plant.rating}
            />

            <ProductDetailsDescription
                description={plant.description}
                careTips={plant.care_type ? plant.care_type.join(", ") : "Aucun conseil d'entretien disponible"}
            />

        </div>
    );
}

export default ProductDetails;
