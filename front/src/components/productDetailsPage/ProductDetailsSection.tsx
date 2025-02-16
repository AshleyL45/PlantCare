import React from "react";
import StraightenIcon from "@mui/icons-material/Straighten";
import PetsIcon from "@mui/icons-material/Pets";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import QuantitySelector from "./QuantitySelector";
import GenericButton from "../GenericButton";
import ProductDetailsRating from "./ProductDetailsRating";
import {Box} from "@mui/material";

interface ProductDetailsSectionProps {
    name: string;
    latinName: string;
    category: string;
    price: string;
    size: string;
    petFriendly: boolean;
    rating: number;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
                                                                         name,
                                                                         latinName,
                                                                         category,
                                                                         price,
                                                                         size,
                                                                         petFriendly,
                                                                         rating
                                                                     }) => {
    return (
        <Box sx={{width: "35%"}}>
            {/* Ligne du nom et de la note */}
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                <Box sx={{display: "block"}}>
                    <h1 style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        margin: 0,
                        lineHeight: "1"
                    }}>
                        {name}
                    </h1>

                    {/*Nom latin*/}
                    <p style={{
                        color: "gray",
                        fontStyle: "italic",
                        margin: 0,
                        lineHeight: "1"
                    }}>
                        {latinName}
                    </p>
                </Box>
                <ProductDetailsRating rating={rating}/>
            </Box>

            <p>Catégorie : {category}</p>
            <p>Prix : {price}</p>

            {/* Icône de taille */}
            <Box sx={{display: "flex", alignItems: "center"}}>
                <StraightenIcon sx={{marginRight: "8px"}}/>
                {size}
            </Box>

            {/* Icône pet-friendly */}
            <Box>
                {petFriendly ? (
                    <>
                        <PetsIcon sx={{color: "green", marginRight: "8px"}}/>
                        Pet-friendly : Oui
                    </>
                ) : (
                    <>
                        <DoNotDisturbIcon sx={{color: "red", marginRight: "8px"}}/>
                        Pet-friendly : Non
                    </>
                )}
            </Box>

            {/* Sélecteur de quantité + Bouton Ajouter */}
            <Box sx={{display: "flex", alignItems: "center", gap: "80px", marginTop: "20px", paddingTop: "60px"}}>
                <QuantitySelector/>
            </Box>
        </Box>
    );
};

export default ProductDetailsSection;
