import React from "react";
import {Product} from "../../@types/product";

interface OrderProps {
    product: Product;
}

const Order: React.FC<OrderProps> = ({product}) => {
    return (
        <div className="order">
            <img src={product.image} alt={product.name} width="100"/>
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
        </div>
    );
};

export default Order;
