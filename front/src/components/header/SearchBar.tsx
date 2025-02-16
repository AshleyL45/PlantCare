import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import useProductSearch from "./useProductSearch";

interface Product {
    id: number;
    name: string;
    image: string;
}

const SearchBar: React.FC = () => {
    // État local pour la chaîne de recherche
    const [query, setQuery] = useState("");
    // Utilisation du hook personnalisé pour récupérer suggestions et dropdown
    const {suggestions, showDropdown} = useProductSearch(query, 2000); // Définissez ici le debounce souhaité
    const navigate = useNavigate();
    const searchBarRef = useRef<HTMLDivElement | null>(null);

    // Fonction pour rediriger vers la page de détails du produit
    const handleProductClick = (id: number) => {
        setTimeout(() => navigate(`/product-details/${id}`), 100);
    };

    return (
        <div className="searchbar-wrap" ref={searchBarRef}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Rechercher une plante..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    width: 250,
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        backgroundColor: "#386641",
                        transition: "background-color 0.3s ease",
                        "&:hover": {backgroundColor: "#58813e"},
                        "&.Mui-focused": {backgroundColor: "#58813e"},
                        "& fieldset": {borderColor: "rgba(255,255,255,0.5)"},
                        "&:hover fieldset": {borderColor: "rgba(255,255,255,0.7)"},
                        "&.Mui-focused fieldset": {borderColor: "white"},
                    },
                    "& .MuiInputAdornment-root .MuiIconButton-root": {
                        color: "white",
                    },
                }}
            />
            {showDropdown && suggestions.length > 0 &&
                ReactDOM.createPortal(
                    <div style={{position: "fixed", top: "65px", right: "370px", zIndex: 1000}}>
                        <Paper
                            className="searchbar-wrap-drop"
                            style={{width: "600px", overflowY: "auto", borderRadius: "8px"}}
                        >
                            <List>
                                {suggestions.map((product: Product) => (
                                    <ListItem
                                        key={product.id}
                                        onClick={() => handleProductClick(product.id)}
                                        component="li"
                                        style={{cursor: "pointer"}}
                                    >
                                        <ListItemAvatar>
                                            <Avatar src={product.image} alt={product.name}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={product.name}/>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default SearchBar;
