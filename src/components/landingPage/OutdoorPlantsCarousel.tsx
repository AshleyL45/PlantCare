import React from "react";
import MainCarousel from "../../components/landingPage/MainCarousel"; // Carousel principal
import OurHouseplantsCarousel from "../../components/landingPage/HouseplantsCarousel"; // Plantes d'intérieur
import OurEasyCarePlantsCarousel from "../../components/landingPage/EasyCarePlantsCarousel"; // Plantes faciles d’entretien
import OutdoorPlantsCarousel from "../../components/landingPage/OutdoorPlantsCarousel"; // Plantes d'extérieur

const LandingPage: React.FC = () => {
    return (
        <div>
            {/* Carousel principal */}
            <MainCarousel/>

            {/* Plantes d'intérieur */}
            <h2 style={{textAlign: "center", marginTop: "40px"}}>Nos plantes d'intérieur</h2>
            <OurHouseplantsCarousel/>

            {/* Plantes faciles d’entretien */}
            <OurEasyCarePlantsCarousel/>

            {/* Plantes d'extérieur */}
            <OutdoorPlantsCarousel/>
        </div>
    );
};

export default LandingPage;
