import * as React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchBar from '../../components/header/SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YardIcon from '@mui/icons-material/Yard';

const pages = [
    {name: "Accueil", path: "/"},
    {name: "Produits", path: "/products"},
    {name: "Panier", path: "/cart"},
    {name: "Admin", path: "/admin"},
    {name: "Connexion", path: "/login"},
];

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleProductsClick = () => {
        navigate("/products", {
            state: {
                filters: {
                    indoor: true,
                    outdoor: true,
                    easycare: true,
                },
            },
        });
    };

    // Style commun pour les boutons du menu, avec changement de fond au survol
    const buttonSx = {
        color: "white",
        mx: 1,
        "&:hover": {backgroundColor: "rgba(255,255,255,0.2)"},
    };

    return (
        <AppBar position="static" sx={{backgroundColor: '#386641'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <YardIcon sx={{display: {xs: "none", md: "flex"}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        PlantCare
                    </Typography>

                    <Box sx={{flexGrow: 1, display: "flex", ml: 3}}>
                        {pages.map((page) => {
                            // Vérifier si la route courante correspond à la route du bouton
                            const active = location.pathname === page.path;
                            // Style dynamique pour afficher un fond actif si c'est la page en cours
                            const activeSx = {
                                ...buttonSx,
                                backgroundColor: active ? "rgba(255,255,255,0.2)" : "transparent",
                            };

                            return page.name === "Produits" ? (
                                <Button
                                    key={page.name}
                                    onClick={handleProductsClick}
                                    sx={activeSx}
                                >
                                    {page.name}
                                </Button>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    sx={activeSx}
                                >
                                    {page.name}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box>
                        <SearchBar/>
                    </Box>

                    <Box sx={{flexGrow: 0, display: "flex", alignItems: "center", marginLeft: "auto", pl: 6}}>
                        <Tooltip title="Paramètres">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0, mr: 3.5}}>
                                <Avatar alt="User Profile" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{vertical: "top", horizontal: "right"}}
                            keepMounted
                            transformOrigin={{vertical: "top", horizontal: "right"}}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>Profil</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Compte</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Tableau de bord</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Déconnexion</MenuItem>
                        </Menu>

                        <IconButton component={Link} to="/cart" sx={{color: "white"}}>
                            <ShoppingCartIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}