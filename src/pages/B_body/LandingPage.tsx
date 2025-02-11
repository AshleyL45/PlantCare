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
            <OurHouseplantsCarousel/>

            {/* Plantes faciles d’entretien */}
            <OurEasyCarePlantsCarousel/>

            {/* Plantes d'extérieur */}
            <OutdoorPlantsCarousel/>
        </div>
    );
};

export default LandingPage;
