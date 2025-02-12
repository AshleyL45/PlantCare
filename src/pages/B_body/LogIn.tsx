import React from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';

function LoginPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    padding: 4,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: 400,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Se connecter
                </Typography>
                <TextField
                    label="Adresse mail"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mot de passe"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{mt: 2}}
                    fullWidth
                >
                    Se connecter
                </Button>
            </Box>
        </Box>
    );
}

export default LoginPage;
