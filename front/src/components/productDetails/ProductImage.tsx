// ProductImage.tsx
import React from 'react';

export interface ProductImageProps {
    imageUrl: string;
    alt?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({imageUrl, alt = 'Produit'}) => {
    return <img src={imageUrl} alt={alt} style={{width: '100%'}}/>;
};

export default ProductImage;
