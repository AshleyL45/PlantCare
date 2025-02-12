import React from "react";

interface ProductImageProps {
    imageUrl?: string | null;  // 🔥 Gère les valeurs nulles
    altText?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({imageUrl, altText = "Image du produit"}) => {
    const defaultImage = "https://via.placeholder.com/730x590?text=Image+Indisponible"; // ✅ Image de secours

    return (
        <div className="product-container">
            <div className="product-image">
                <img
                    src={imageUrl && imageUrl !== "null" ? imageUrl : defaultImage} // 🔥 Vérification et image par défaut
                    alt={altText}
                    className="responsive-image"
                    style={{width: "730px", height: "590px", objectFit: "cover"}} // 🔥 Taille fixe
                />
            </div>
        </div>
    );
};

export default ProductImage;
