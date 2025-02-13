export interface Plant {
    id: number;
    name: string;
    latin_name: string;
    description: string;
    quantity: number;
    care_type: string[];
    category: "indoor plant" | "outdoor plant" | "easycare plant";
    rating: number;
    size: string;
    pet_friendly: boolean;
    image: string;
}