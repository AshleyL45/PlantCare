import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useNavigate} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./productCarousel.css";
<<<<<<< HEAD
import GenericButton from "../../GenericButton";
=======
>>>>>>> 967dcbd (OutdoorPlantsCarousel problem solved / footer added)

interface ProductCarouselProps {
    products: { id: number; image: string; name: string; description: string; price: string }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({products}) => {
    const navigate = useNavigate();

    const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // 🔥 EMPÊCHE LA REDIRECTION
        console.log("Produit ajouté au panier"); // Simule l'ajout au panier
    };

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation]}
<<<<<<< HEAD
                spaceBetween={10}
                slidesPerView="auto"
=======
                spaceBetween={4}
                slidesPerView={7}
>>>>>>> 967dcbd (OutdoorPlantsCarousel problem solved / footer added)
                navigation
                loop
                centeredSlides={true}
                style={{padding: "20px"}}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} style={{width: "250px"}}>
                        <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
                            <div className="image-container">
                                <img src={product.image} alt={product.name} className="product-image"/>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                            </div>
                            <div className="button-container">
                                <GenericButton
                                    label="Ajouter au panier"
                                    onClick={handleAddToCartClick}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
