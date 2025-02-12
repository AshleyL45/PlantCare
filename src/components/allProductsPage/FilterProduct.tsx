import React from "react";

interface FilterProps {
    filters: {
        indoor: boolean;
        outdoor: boolean;
        easycare: boolean;

    };
    onFilterChange: (name: string, checked: boolean) => void;
}

const FilterProduct: React.FC<FilterProps> = ({filters, onFilterChange}) => {
    return (
        <div
            style={{
                margin: "20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <span style={{fontWeight: "bold"}}>Filtrer par :</span>
            <div style={{display: "flex", gap: "20px"}}>
                <label>
                    <input
                        type="checkbox"
                        name="indoor"
                        checked={filters.indoor}
                        onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                    />
                    Plantes d'intérieur
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="outdoor"
                        checked={filters.outdoor}
                        onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                    />
                    Plantes d'extérieur
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="easycare"
                        checked={filters.easycare}
                        onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                    />
                    Plantes faciles d'entretien
                </label>
            </div>
        </div>
    );
};

export default FilterProduct;
