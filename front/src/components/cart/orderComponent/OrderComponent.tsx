import React from 'react';
import OrderProductImage from './OrderProductImage';
import OrderProductDescription from './OrderProductDescription';

interface OrderComponentProps {
    imageSrc: string;
    productName: string;
    productLatinName: string;
    price: number;
    onDelete: () => void;
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#b5bfca',
        padding: '16px',
        borderRadius: '8px',
        gap: '16px',
        width: '600px',
        height: '150px',
        marginBottom: '30px',
    } as React.CSSProperties,

    imageContainer: {

        backgroundColor: '#cdd6e0',
        borderRadius: '4px',
    } as React.CSSProperties,

    descriptionContainer: {
        flex: 1,
    } as React.CSSProperties,
};

const OrderComponent: React.FC<OrderComponentProps> = ({
                                                           imageSrc,
                                                           productName,
                                                           productLatinName,
                                                           price,
                                                           onDelete,
                                                       }) => {
    return (
        <div style={styles.container}>
            {/* Colonne de gauche : l’image */}
            <div style={styles.imageContainer}>
                <OrderProductImage src={imageSrc} alt={productName}/>
            </div>

            {/* Colonne de droite : la description (nom, latin, poubelle, quantité, prix, etc.) */}
            <div style={styles.descriptionContainer}>
                <OrderProductDescription
                    productName={productName}
                    productLatinName={productLatinName}
                    price={price}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
};

export default OrderComponent;
