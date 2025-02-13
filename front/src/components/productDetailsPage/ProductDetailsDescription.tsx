import React, {useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";

interface ProductTabsProps {
    description: string;
    careTips: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({description, careTips}) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Box sx={{width: "100%", marginTop: "40px"}}>
            {/* Onglets */}
            <Tabs
                value={selectedTab}
                onChange={(_, newValue) => setSelectedTab(newValue)}
                variant="fullWidth"
                sx={{
                    borderBottom: "2px solid #c4c4c4",
                    "& .MuiTabs-indicator": {backgroundColor: "#1976d2"},
                }}
            >
                <Tab label="Description"/>
                <Tab label="Conseils d'entretien"/>
            </Tabs>

            {/* Contenu dynamique */}
            <Box sx={{padding: "20px", backgroundColor: "#f5f5f5", minHeight: "200px"}}>
                {selectedTab === 0 && <Typography variant="body1">{description}</Typography>}
                {selectedTab === 1 && <Typography variant="body1">{careTips}</Typography>}
            </Box>
        </Box>
    );
};

export default ProductTabs;
