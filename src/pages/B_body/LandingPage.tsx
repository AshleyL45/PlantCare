import React from "react";
import MainCarousel from "../../components/landingPage/MainCarousel";
import OurHouseplantsCarousel from "../../components/landingPage/HouseplantsCarousel";
import OurEasyCarePlantsCarousel from "../../components/landingPage/EasyCarePlantsCarousel";
import OutdoorPlantsCarousel from "../../components/landingPage/OutdoorPlantsCarousel";

const LandingPage: React.FC = () => {
    return (
        <div>
            {/* Carousel principal */}
            <MainCarousel/>

            {/* Plantes d'intérieur */}
            <section style={{textAlign: "center", marginTop: "50px"}}>
                <h2>🌿 Plantes d'intérieur</h2>
                <p>Apportez une touche de verdure à votre intérieur avec notre sélection de plantes d'intérieur
                    élégantes.</p>
                <OurHouseplantsCarousel/>
            </section>

            {/* Plantes faciles d’entretien */}
            <section style={{textAlign: "center", marginTop: "50px"}}>
                <h2>🌱 Plantes faciles d'entretien</h2>
                <p>Idéales pour les débutants, ces plantes demandent peu d’attention tout en embellissant votre
                    espace.</p>
                <OurEasyCarePlantsCarousel/>
            </section>

            {/* Plantes d'extérieur */}
            <section style={{textAlign: "center", marginTop: "50px", marginBottom: "50px"}}>
                <h2>🌳 Plantes d'extérieur</h2>
                <p>Transformez votre jardin, terrasse ou balcon avec notre collection de plantes d'extérieur
                    robustes.</p>
                <OutdoorPlantsCarousel/>
            </section>
        </div>
    );
};

export default LandingPage;

