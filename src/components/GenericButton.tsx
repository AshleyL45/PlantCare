import React from "react";
import {Button} from "@mui/material";

interface GenericButtonProps {
    label: string;
    onClick?: () => void;
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const GenericButton: React.FC<GenericButtonProps> = ({label, onClick, color = "primary"}) => {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            sx={{
                transition: "background-color 0.3s ease",
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: "#1976d2",
                }
            }}
        >
            {label}
        </Button>
    );
};

export default GenericButton;
