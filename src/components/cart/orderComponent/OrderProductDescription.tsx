import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import QuantitySelector from '../../productDetailsPage/QuantitySelector';

interface OrderDescriptionProps {
    productName: string;
    productLatinName: string;
    price: number;
    onDelete: () => void;
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '400px',
        padding: '8px',
        borderRadius: '4px',
        margin: '8px 0',
    } as React.CSSProperties,

    info: {
        display: 'flex',
        flexDirection: 'column',
    } as React.CSSProperties,

    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
    } as React.CSSProperties,
};

function OrderProductDescription({
                              productName,
                              productLatinName,
                              price,
                              onDelete,
                          }: OrderDescriptionProps) {
    return (
        <div style={styles.container}>
            <div style={styles.info}>
                <h3>{productName}</h3>
                <p><em>{productLatinName}</em></p>
                <p>{price} €</p>
            </div>

            <div style={styles.actions}>
                <IconButton onClick={onDelete} aria-label="supprimer">
                    <DeleteIcon/>
                </IconButton>
                <QuantitySelector/>
            </div>
        </div>
    );
}

export default OrderProductDescription;
