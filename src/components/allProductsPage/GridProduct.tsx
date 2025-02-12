import React from "react";
import {Plant} from "../../@types/plantType";

interface ProductWithPrice extends Plant {
    price: string;
}

interface ProductGridProps {
    products: ProductWithPrice[];
}

const GridProduct: React.FC<ProductGridProps> = ({products}) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
            }}
        >
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "10px",
                        width: "250px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "4px",
                        }}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default GridProduct;
