import {useEffect, useState} from "react";
import {fetchProducts} from "../../services/productService";
import GridProduct from "../../components/allProductsPage/GridProduct";


type Product = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
};

function AllProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        async function loadProducts() {
            try {
                const data: Product[] = await fetchProducts();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        }

        loadProducts();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategory, products]);

    return (
        <div className="all-products">
            <h2>Nos Plantes</h2>


            {/* Affichage des produits via GridProduct */}
            <GridProduct products={filteredProducts}/>
        </div>
    );
}

export default AllProducts;
