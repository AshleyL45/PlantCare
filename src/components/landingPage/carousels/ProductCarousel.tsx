import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./productCarousel.css"; // Fichier CSS pour le style

interface ProductCarouselProps {
    products: { id: number; image: string; name: string; description: string; price: string }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({products}) => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={4} // ✅ Réduction de l'espacement entre les cartes
                slidesPerView={7} // ✅ Afficher 4 cartes en même temps
                navigation
                loop
                style={{width: "100%", padding: "20px 0"}}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="product-card">
                            <img src={product.image} alt={product.name} className="product-image"/>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{product.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
