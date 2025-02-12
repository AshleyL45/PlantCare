import React from "react";
import ProductImage from "../../components/productDetailsPage/ProductImage";
import ProductDetailsSection from "../../components/productDetailsPage/ProductDetailsSection";
import ProductDetailsDescription from "../../components/productDetailsPage/ProductDetailsDescription";

const ProductDetails: React.FC = () => {
    const testPlant = {
        id: 1,
        name: "Ficus Lyrata",
        latin_name: "Ficus lyrata",
        description: "Le Ficus Lyrata est une plante d'intérieur populaire avec de grandes feuilles luxuriantes.",
        care_tips: "Arrosez une fois par semaine et placez dans une lumière indirecte.",
        category: "indoor plant",
        rating: 7,
        size: "Moyenne",
        pet_friendly: false,
        image: "https://bergamotte.imgix.net/qanv6ik9bw7o3cprw5ixqeyantp5?ixlib=rails-4.3.1&auto=format%2Ccompress&fit=crop&q=65&ar=1%3A1"
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "70vh",
            width: "100%",
            padding: "50px 0"
        }}>
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "110px",
                maxWidth: "1200px",
                width: "100%",
            }}>
                <ProductImage imageUrl={testPlant.image} altText={testPlant.name}/>
                <ProductDetailsSection
                    name={testPlant.name}
                    latinName={testPlant.latin_name}
                    category={testPlant.category}
                    price="19.99€"
                    size={testPlant.size}
                    petFriendly={testPlant.pet_friendly}
                    rating={testPlant.rating}
                />
            </div>

            <div style={{width: "100%", maxWidth: "1000px", marginTop: "40px"}}>
                {/* 🔥 Ajout des onglets via ProductDetailsDescription */}
                <ProductDetailsDescription description={testPlant.description} careTips={testPlant.care_tips}/>
            </div>
        </div>
    );
};

export default ProductDetails;
