import React from "react";
import {Button} from "@mui/material";

interface GenericButtonProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    className?: string;
}

const GenericButton: React.FC<GenericButtonProps> = ({label, onClick, color = "primary", className}) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            className={className}
            sx={{
                transition: "background-color 0.3s ease",
                cursor: "pointer",
            }}
        >
            {label}
        </Button>
    );
};

export default GenericButton;
