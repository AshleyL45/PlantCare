export interface Product {
    id: number;
    name: string;
    latin_name: string;
    description: string;
    category: string;
    size: string;
    pet_friendly: boolean;
    rating: number;
    price: number;
    image: string;
    care_type: string[];
}
