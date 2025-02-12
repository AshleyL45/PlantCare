import React from 'react';

interface OrderImageProps {
    src?: string;
    alt?: string;
}

const OrderProductImage: React.FC<OrderImageProps> = ({src, alt = ''}) => {
    // URL du placeholder 150x150
    const placeholder = 'https://via.placeholder.com/150';

    // Si src n’est pas renseigné, on affiche le placeholder
    const imageToDisplay = src || placeholder;

    return (
        <img
            src={imageToDisplay}
            alt={alt}
            width={150}
            height={150}
            style={{objectFit: 'cover'}}
        />
    );
};

export default OrderProductImage;
