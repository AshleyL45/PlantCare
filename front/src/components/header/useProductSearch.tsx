
import {useState, useEffect, useRef} from "react";
import axios from "axios";

export interface Product {
    id: number;
    name: string;
    image: string;
}

/**
 * Hook personnalisé pour rechercher des produits.
 * @param query Chaîne de recherche.
 * @param debounceTime Délai (en ms) pour le debounce.
 * @returns Un objet contenant les suggestions et l'état d'affichage du dropdown.
 */
const useProductSearch = (query: string, debounceTime: number = 300) => {
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (query.length >= 3) {
            // Annuler le timer précédent si présent
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

            // Démarrer un nouveau timer pour le debounce
            typingTimeoutRef.current = setTimeout(async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:8080/product/search?keyword=${encodeURIComponent(query)}`
                    );
                    if (response.data && response.data.length > 0) {
                        setSuggestions(response.data);
                        setShowDropdown(true);
                    } else {
                        setSuggestions([]);
                        setShowDropdown(false);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des produits :", error);
                    setSuggestions([]);
                    setShowDropdown(false);
                }
            }, debounceTime);
        } else {
            setSuggestions([]);
            setShowDropdown(false);
        }
    }, [query, debounceTime]);

    return {suggestions, showDropdown};
};

export default useProductSearch;
