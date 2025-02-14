import "./productImage.css";

type ProductImageProps = {
    imageUrl: string;
};

function ProductImage({imageUrl}: ProductImageProps) {
    return (
        <div className="product-image-container">
            <img
                src={imageUrl || "https://via.placeholder.com/250"}
                alt="Produit"
                className="product-image"
            />
        </div>
    );
}

export default ProductImage;
