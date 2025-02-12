import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./productCarousel.css";
import GenericButton from "../../GenericButton";

interface ProductCarouselProps {
    products: { id: number; image: string; name: string; description: string; price: string }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({products}) => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView="auto"
                navigation
                loop
                centeredSlides={true}
                style={{padding: "20px"}}
            >
                {products.map((product) => (
                    <SwiperSlide
                        key={product.id}
                        style={{width: "300px", display: "flex", justifyContent: "center"}}
                    >
                        <div className="product-card">
                            <div className="image-container">
                                <img src={product.image} alt={product.name} className="product-image"/>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                                <div className="button-container">
                                    <GenericButton label="Ajouter au panier" color="primary"/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;

