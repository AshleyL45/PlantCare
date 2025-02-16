import React, {useContext} from 'react';
import {CartContext} from '../../contexts/CartContext';
import {Product} from "../../@types/product";

const Cart: React.FC = () => {
    const {cartItems} = useContext(CartContext);
    console.log('Produits dans le panier:', cartItems);

    return (
        <div>
            <h1>Mon panier</h1>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                cartItems.map((item: Product, index: number) => (
                    <div key={index} style={{border: '1px solid #ccc', padding: '8px', marginBottom: '8px'}}>
                        <img src={item.image} alt={item.name} style={{width: '100px'}}/>
                        <h3>{item.name}</h3>
                        <p>{item.price} €</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;