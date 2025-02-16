import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import ProductImage from '../../components/productDetails/ProductImage';
import ProductDetailsSection from '../../components/productDetails/ProductDetailsSection';
import ProductDetailsDescription from '../../components/productDetails/ProductDetailsDescription';
import {CartContext} from '../../contexts/CartContext';
import {fetchProductById} from '../../services/productService';
import {Product} from '../../@types/product';

const ProductDetails: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        async function loadProduct() {
            if (!id) return;
            try {
                const data = await fetchProductById(parseInt(id, 10));
                setProduct(data);
            } catch (error) {
                console.error('Erreur lors de la récupération du produit:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    if (isLoading) return <p>Chargement du produit...</p>;
    if (!product) return <p>Produit introuvable</p>;

    const handleAddToCart = () => {
        addToCart(product);
        // Vous pouvez ajouter ici une logique supplémentaire (par exemple, une pop-up de confirmation)
    };

    return (
        <div style={{padding: '20px'}}>
            {/* Première ligne : Image à gauche et Section des détails à droite */}
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                <div style={{flex: '1 1 300px', marginRight: '20px'}}>
                    <ProductImage imageUrl={product.image} alt={product.name}/>
                </div>
                <div style={{flex: '2 1 300px'}}>
                    <ProductDetailsSection
                        name={product.name}
                        latinName={product.latin_name}
                        category={product.category}
                        price={`${product.price.toFixed(2)}€`}
                        size={product.size}
                        petFriendly={product.pet_friendly}
                        rating={product.rating}
                    />
                    <div style={{marginTop: '10px'}}>
                        <button
                            onClick={handleAddToCart}
                            style={{
                                backgroundColor: '#6A994E',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease, transform 0.1s ease'
                            }}
                            onMouseOver={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#A7C957';
                            }}
                            onMouseOut={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6A994E';
                            }}
                            onMouseDown={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.95)';
                            }}
                            onMouseUp={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>

            {/* Deuxième ligne : Description */}
            <div style={{marginTop: '20px'}}>
                <ProductDetailsDescription
                    description={product.description}
                    careTips={
                        product.care_type && product.care_type.length > 0
                            ? product.care_type.join(', ')
                            : "Aucun conseil d'entretien disponible"
                    }
                />
            </div>
        </div>
    );
};

export default ProductDetails;
