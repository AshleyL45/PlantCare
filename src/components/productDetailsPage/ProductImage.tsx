import React from "react";

interface ProductImageProps {
    imageUrl?: string;
    altText?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({imageUrl, altText = "Image du produit"}) => {
    return (
        <div style={{
            width: "400px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",

        }}>
            <img
                src={imageUrl || "https://via.placeholder.com/730x590"}
                alt={altText}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
            />
        </div>
    );
};

export default ProductImage;
