import React from "react";
import MainCarousel from "../../components/landingPage/MainCarousel";
import OutdoorPlantsCarousel from "../../components/landingPage/OutdoorPlantsCarousel";
import HouseplantsCarousel from "../../components/landingPage/HouseplantsCarousel";
import EasyCarePlantsCarousel from "../../components/landingPage/EasyCarePlantsCarousel";
import FooterComponent from "../../components/footer/FooterComponent";


const LandingPage: React.FC = () => {
    return (
        <>
            <header>
                <h1>Bienvenue sur PlantCare</h1>
            </header>
            <main>
                <section style={{width: "100%"}}>
                    <MainCarousel/>
                </section>

                <section style={{width: "100%", padding: "40px 20px", textAlign: "center"}}>
                    <h2>Plantes d'intérieur</h2>
                    <p>Découvrez notre sélection de plantes d'intérieur pour embellir votre maison.</p>
                    <HouseplantsCarousel/>
                </section>

                <section style={{width: "100%", padding: "40px 20px", textAlign: "center"}}>
                    <h2>Plantes faciles d’entretien</h2>
                    <p>Découvrez notre sélection de plantes qui demandent peu d’attention et sont idéales pour les
                        débutants.</p>
                    <EasyCarePlantsCarousel/>
                </section>

                <section style={{width: "100%", padding: "40px 20px", textAlign: "center"}}>
                    <h2>Plantes d'extérieur</h2>
                    <p>Découvrez notre sélection de plantes idéales pour balcons, terrasses et jardins.</p>
                    <OutdoorPlantsCarousel/>
                </section>
            </main>

            <footer>
                <FooterComponent/>
            </footer>
        </>
    );
};

export default LandingPage;
