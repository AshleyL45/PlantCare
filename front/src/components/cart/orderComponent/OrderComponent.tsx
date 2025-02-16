import React from 'react';

export interface OrderProps {
    imageSrc: string;
    productName: string;
    productLatinName: string;
    price: number;
    onDelete: () => void;
}

const OrderComponent: React.FC<OrderProps> = ({imageSrc, productName, productLatinName, price, onDelete}) => {
    return (
        <div className="order" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            border: '1px solid #ccc',
            padding: '8px'
        }}>
            <img src={imageSrc} alt={productName} style={{width: '100px', marginRight: '16px'}}/>
            <div>
                <h3>{productName}</h3>
                <p>{productLatinName}</p>
                <p>{price.toFixed(2)} €</p>
            </div>
            <button onClick={onDelete} style={{marginLeft: 'auto'}}>Supprimer</button>
        </div>
    );
};

export default OrderComponent;
