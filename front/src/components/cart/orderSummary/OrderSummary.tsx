import React from 'react';
import GenericButton from '../../GenericButton';

const styles = {
    container: {
        backgroundColor: '#e0e4ec',
        padding: '16px',
        borderRadius: '8px',
        width: '280px',
    } as React.CSSProperties,
    title: {
        margin: '0 0 8px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
    } as React.CSSProperties,
    line: {
        border: 'none',
        borderBottom: '1px solid #596C82',
        margin: '8px 0',
    } as React.CSSProperties,
    text: {
        margin: '0',
        fontSize: '0.95rem',
    } as React.CSSProperties,
    buttonContainer: {
        marginTop: '16px',
        textAlign: 'center',
    } as React.CSSProperties,
};

const OrderSummary: React.FC = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Aperçu de la commande</h2>
            <hr style={styles.line}/>
            <p style={styles.text}>Total HT</p>
            <hr style={styles.line}/>
            <p style={styles.text}>Total TTC</p>
            <div style={styles.buttonContainer}>
                <GenericButton
                    label="Poursuivre le paiement"
                    onClick={() => console.log("Payer")}
                    color="primary"
                />
            </div>
        </div>
    );
};

export default OrderSummary;
