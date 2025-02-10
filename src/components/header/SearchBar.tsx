import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha} from '@mui/material/styles';

// Style pour le conteneur de la barre de recherche
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    transition: 'width 0.3s ease-in-out',
    width: '150px',
    [theme.breakpoints.up('sm')]: {
        width: '200px',
    },
}));

// Style pour l'icône de recherche
const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// Style pour le champ de recherche
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        '&:focus': {
            width: '250px',
        },
    },
}));

const SearchBar: React.FC = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Rechercher…"
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    );
};

export default SearchBar;
