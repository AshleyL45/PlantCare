import React from "react";
import {useParams} from "react-router-dom";
import ProductImage from "../../components/productDetailsPage/ProductImage";
import ProductDetailsSection from "../../components/productDetailsPage/ProductDetailsSection";
import ProductDetailsDescription from "../../components/productDetailsPage/ProductDetailsDescription";
import plantsData from "../../dataFake/plant_collection_updated.json"; // Import des plantes depuis le JSON

const ProductDetails: React.FC = () => {
    const {id} = useParams<{ id: string }>(); // Récupération de l'ID depuis l'URL
    const plant = plantsData.find((p) => p.id.toString() === id); // Recherche du produit correspondant

    // ✅ Si le produit n'existe pas, affiche un message
    if (!plant) return <p style={{textAlign: "center", fontSize: "1.5rem"}}>Plante non trouvée.</p>;

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            width: "100%",
            padding: "50px 0"
        }}>
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "80px",
                maxWidth: "1200px",
                width: "100%",
            }}>
                {/* Image du produit */}
                <ProductImage imageUrl={plant.image} altText={plant.name}/>

                {/* Détails du produit */}
                <ProductDetailsSection
                    name={plant.name}
                    latinName={plant.latin_name}
                    category={plant.category}
                    price="19.99€"
                    size={plant.size}
                    petFriendly={plant.pet_friendly}
                    rating={plant.rating}
                />
            </div>

            {/* Section Description et Conseils d'entretien */}
            <div style={{width: "100%", maxWidth: "1000px", marginTop: "40px"}}>
                <ProductDetailsDescription
                    description={plant.description}
                    careTips={plant.care_type.join(", ")}
                />
            </div>
        </div>
    );
};

export default ProductDetails;
