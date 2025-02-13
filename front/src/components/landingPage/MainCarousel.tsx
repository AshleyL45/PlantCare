import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../style/mainCarousel.css"; // Vérifie le chemin du CSS

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80",
        alt: "Nature et eau"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
        alt: "Forêt et arbres"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80",
        alt: "Montagne et ciel"
    },
];

const MainCarousel: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{delay: 3000, disableOnInteraction: false}}
            loop
            style={{width: "100vw", height: "500px"}} // Pleine largeur
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainCarousel;
