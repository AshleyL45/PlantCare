import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import GenericButton from "../GenericButton";
import "./gridProduct.css";
import {CartContext} from "../../contexts/CartContext";
import PopupMessage from "../PopupMessage";

interface GridProductProps {
    products: { id: number; image: string; name: string; price: number }[];
}

const GridProduct: React.FC<GridProductProps> = ({products}) => {
    const navigate = useNavigate();
    const {addToCart} = useContext(CartContext);
    const [popupMessage, setPopupMessage] = useState<string>("");

    const handleAddToCart = (
        product: { id: number; image: string; name: string; price: number },
        e: React.MouseEvent
    ) => {
        e.stopPropagation(); // Empêche la redirection de la carte
        // Création d'un produit complet en ajoutant les propriétés manquantes
        const completeProduct = {
            ...product,
            latin_name: product.name, // valeur par défaut pour latin_name
            description: "",
            category: "",
            size: "",
            pet_friendly: false,
            rating: 0,
            care_type: [],
        };
        addToCart(completeProduct);
        console.log("Produit ajouté au panier :", completeProduct);
        setPopupMessage("Produit ajouté au panier !");
    };

    return (
        <div className="grid-container">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="grid-card"
                    onClick={() => navigate(`/product-details/${product.id}`)}
                >
                    <img src={product.image} alt={product.name} className="grid-image"/>
                    <div className="grid-info">
                        <h3 className="grid-name">{product.name}</h3>
                        <p className="grid-price">{product.price}</p>

                        {/* Bouton "Ajouter au panier" avec la classe de style */}
                        <div
                            onClick={(e) => handleAddToCart(product, e)}
                            className="grid-button-container"
                        >
                            <GenericButton
                                label="Ajouter au panier"
                                className="add-to-cart-button"
                            />
                        </div>
                    </div>
                </div>
            ))}
            {popupMessage && (
                <PopupMessage
                    message={popupMessage}
                    onClose={() => setPopupMessage("")}
                />
            )}
        </div>
    );
};

export default GridProduct;
