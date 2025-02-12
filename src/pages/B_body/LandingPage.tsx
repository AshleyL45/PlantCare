import React from "react";
import MainCarousel from "../../components/landingPage/MainCarousel";
import OutdoorPlantsCarousel from "../../components/landingPage/OutdoorPlantsCarousel";
import IndoorPlantsCarousel from "../../components/landingPage/IndoorPlantsCarousel";
import EasyCarePlantsCarousel from "../../components/landingPage/EasyCarePlantsCarousel";
import FooterComponent from "../../components/footer/FooterComponent";
import GenericButton from "../../components/GenericButton";


const LandingPage: React.FC = () => {
    return (
        <>
            <main>
                <section style={{width: "100%"}}>
                    <MainCarousel/>
                </section>

                <section style={{width: "100%", textAlign: "center", padding: "100px 0"}}>
                    <p style={{fontSize: "1.2rem", fontWeight: "bold", maxWidth: "800px", margin: "0 auto"}}>
                        Transformez votre intérieur et extérieur avec nos plantes soigneusement sélectionnées. 🌿🌱
                        Apportez une touche de verdure à votre quotidien en découvrant nos plantes d’intérieur,
                        d’extérieur et faciles d’entretien. Faites entrer la nature chez vous dès aujourd’hui !
                    </p>
                </section>

                <section style={{textAlign: "center", paddingBottom: "100px", position: "relative"}}>
                    <h2>Plantes d'intérieur</h2>
                    <p>Découvrez notre sélection de plantes d'intérieur pour embellir votre maison.</p>
                    <IndoorPlantsCarousel/>
                </section>

                <section style={{textAlign: "center", paddingBottom: "100px", position: "relative"}}>
                    <h2>Plantes faciles d’entretien</h2>
                    <p>Découvrez notre sélection de plantes qui demandent peu d’attention et sont idéales pour les
                        débutants.</p>
                    <EasyCarePlantsCarousel/>
                </section>

                <section style={{textAlign: "center", paddingBottom: "150px", position: "relative"}}>
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


