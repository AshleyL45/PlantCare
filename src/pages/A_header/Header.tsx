import * as React from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
import SearchBar from '../../components/header/SearchBar'; // Import du composant de recherche
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import de l'icône panier

const pages = [
    {name: "Accueil", path: "/"},
    {name: "Produits", path: "/products"},
    {name: "Panier", path: "/cart"},
    {name: "Admin", path: "/admin"},
    {name: "Connexion", path: "/login"},
];

export default function Header() {
    const navigate = useNavigate();
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

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: "none", md: "flex"}, mr: 1}}/>
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
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: "flex", ml: 3}}>
                        {pages.map((page) =>
                            page.name === "Produits" ? (
                                <Button
                                    key={page.name}
                                    onClick={handleProductsClick}
                                    sx={{color: "white", mx: 1}}
                                >
                                    {page.name}
                                </Button>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    sx={{color: "white", mx: 1}}
                                >
                                    {page.name}
                                </Button>
                            )
                        )}
                    </Box>

                    <SearchBar/>

                    <Box sx={{flexGrow: 0, display: "flex", alignItems: "center", marginLeft: "auto"}}>
                        <Tooltip title="Paramètres">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0, mr: 2}}>
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
