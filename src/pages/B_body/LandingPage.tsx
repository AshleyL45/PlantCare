import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    console.log("LandingPage est affichée !");

    return (
        <div>
            <h1>Bienvenue sur PlantCare</h1>
            <p>Vous êtes bien arrivé sur la page d'accueil.</p>
            <nav>
                <ul>
                    <li><Link to="/landing-page">Accueil</Link></li>
                    <li><Link to="/products">Voir tous les produits</Link></li>
                    <li><Link to="/cart">Accéder au panier</Link></li>
                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/admin">Admin</Link></li>


                </ul>
            </nav>
        </div>
    );
};

export default LandingPage;
