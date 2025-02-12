import React from "react";

interface ProductDetailsRatingProps {
    rating: number;
}

const ProductDetailsRating: React.FC<ProductDetailsRatingProps> = ({rating}) => {
    let difficulty = "Facile";
    let borderColor = "green";
    let textColor = "green";

    if (rating >= 6 && rating <= 8) {
        difficulty = "Moyenne";
        borderColor = "orange";
        textColor = "orange";
    } else if (rating >= 9 && rating <= 10) {
        difficulty = "Difficile";
        borderColor = "red";
        textColor = "red";
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}}>
            <div
                id="difficulty-circle"
                style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: `4px solid ${borderColor}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: textColor,
                    textAlign: "center",
                }}
            >
                Difficulté : {difficulty}
            </div>
        </div>
    );
};

export default ProductDetailsRating;
