// Fonction pour récupérer toutes les plantes
export async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:8080/product");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des produits");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur API :", error);
        return [];
    }
}

// Fonction pour récupérer uniquement les plantes d'intérieur
export async function fetchIndoorPlants() {
    try {
        const response = await fetch("http://localhost:8080/product/category/indoor plant");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des plantes d'intérieur");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur API :", error);
        return [];
    }
}

// Fonction pour récupérer uniquement les plantes faciles d'entretien
export async function fetchEasyCarePlants() {
    try {
        const response = await fetch("http://localhost:8080/product/category/easycare plant");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des plantes faciles d'entretien");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur API :", error);
        return [];
    }
}

// Fonction pour récupérer uniquement les plantes d'extérieur
export async function fetchOutdoorPlants() {
    try {
        const response = await fetch("http://localhost:8080/product/category/outdoor plant");
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des plantes d'extérieur");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur API :", error);
        return [];
    }
}

// Fonction pour récupérer un produit spécifique en fonction de son id
export async function fetchProductById(productId: number) {
    try {
        const response = await fetch(`http://localhost:8080/product/${productId}`);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération du produit");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur API :", error);
        return null;
    }
}



