import React from "react";
import {useNavigate} from "react-router-dom";
import GenericButton from "../GenericButton";
import "./gridProduct.css";

interface GridProductProps {
    products: { id: number; image: string; name: string; price: number }[];
}

const GridProduct: React.FC<GridProductProps> = ({products}) => {
    const navigate = useNavigate();

    return (
        <div className="grid-container">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="grid-card"
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    <img src={product.image} alt={product.name} className="grid-image"/>
                    <div className="grid-info">
                        <h3 className="grid-name">{product.name}</h3>
                        <p className="grid-price">{product.price}</p>

                        {/* 🔥 Ajout du bouton sous le prix, empêchant la redirection */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="grid-button-container"
                        >
                            <GenericButton label="Ajouter au panier"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridProduct;
