import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./productCarousel.css";
import GenericButton from "../../GenericButton";
import {useNavigate} from "react-router-dom";

interface ProductCarouselProps {
    products: { id: number; image: string; name: string; description: string; price: string }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({products}) => {
    const navigate = useNavigate(); // <-- Hook pour naviguer vers la page ProductDetails

    return (
        <div
            className="carousel-container"
            style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}}
        >
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={7}
                navigation
                loop
                centeredSlides // Active l'affichage centré des slides
                style={{width: "90%", padding: "20px"}}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        {/*
                          Au clic sur la card (sauf le bouton), on redirige vers la page des détails du produit
                          grâce à onClick={() => navigate(`/product-details/${product.id}`)}.
                          onClick sur la div du bouton "Ajouter au panier" utilise e.stopPropagation()
                          pour empêcher la redirection.
                        */}
                        <div
                            className="product-card"
                            onClick={() => navigate(`/product-details/${product.id}`)}
                            style={{cursor: "pointer"}}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                                <div
                                    style={{textAlign: "center", marginTop: "10px"}}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <GenericButton
                                        label="Ajouter au panier"
                                        color="primary"
                                    />
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



