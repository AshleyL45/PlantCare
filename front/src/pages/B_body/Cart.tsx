import React from 'react';
import OrderComponent from '../../components/cart/orderComponent/OrderComponent';
import OrderSummary from '../../components/cart/orderSummary/OrderSummary';

function Cart() {
    // Exemple de produits (à adapter selon votre logique de données)
    const product1 = {
        imageSrc:
            'https://images.pexels.com/photos/6044736/pexels-photo-6044736.jpeg?auto=compress&cs=tinysrgb&h=350',
        productName: 'Ficus Lyrata',
        productLatinName: 'Ficus lyrata',
        price: 15.81,
    };

    const product2 = {
        imageSrc:
            'https://images.pexels.com/photos/5553624/pexels-photo-5553624.jpeg?auto=compress&cs=tinysrgb&h=350',
        productName: 'Monstera Deliciosa',
        productLatinName: 'Monstera deliciosa',
        price: 29.99,
    };

    const handleDelete = () => {
        console.log('Produit supprimé du panier');
    };

    const styles = {
        wrapper: {
            padding: '16px',
        } as React.CSSProperties,

        title: {
            margin: '0',
            fontSize: '1.2rem',
            fontWeight: 'bold',
        } as React.CSSProperties,

        separator: {
            border: 'none',
            borderBottom: '1px solid #596C82',
            margin: '8px 0 16px', // Espacement autour du trait
        } as React.CSSProperties,

        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
        } as React.CSSProperties,

        leftColumn: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        } as React.CSSProperties,

        rightColumn: {
            width: '300px',
            flexShrink: 0,
        } as React.CSSProperties,
    };

    return (
        <div style={styles.wrapper}>
            {/* Titre au-dessus de tout */}
            <h2 style={styles.title}>Mon panier</h2>
            <hr style={styles.separator}/>

            {/* Conteneur principal : 2 colonnes */}
            <div style={styles.container}>
                {/* Colonne gauche : liste de OrderComponent */}
                <div style={styles.leftColumn}>
                    <OrderComponent
                        imageSrc={product1.imageSrc}
                        productName={product1.productName}
                        productLatinName={product1.productLatinName}
                        price={product1.price}
                        onDelete={handleDelete}
                    />
                    <OrderComponent
                        imageSrc={product2.imageSrc}
                        productName={product2.productName}
                        productLatinName={product2.productLatinName}
                        price={product2.price}
                        onDelete={handleDelete}
                    />
                </div>

                {/* Colonne droite : OrderSummary */}
                <div style={styles.rightColumn}>
                    <OrderSummary/>
                </div>
            </div>
        </div>
    );
}

export default Cart;
