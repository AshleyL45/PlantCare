import React from "react";
import {Box, Container, Grid, Typography, Link, Stack} from "@mui/material";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";


const FooterComponent: React.FC = () => {
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: "#B0BEC5",
            padding: "20px 0",
            marginTop: "auto"
        }}>
            <Container maxWidth="lg">
                <Stack direction={{xs: "column", md: "row"}} spacing={4} justifyContent="space-between">
                    {/* Section Notre Sélection */}
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            Notre sélection
                        </Typography>
                        <Typography variant="body1">
                            <Link href="#" color="inherit" underline="none">
                                Nos plantes d’intérieur
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href="#" color="inherit" underline="none">
                                Nos plantes d’extérieur
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <Link href="#" color="inherit" underline="none">
                                Nos plantes faciles d’entretien
                            </Link>
                        </Typography>
                    </Box>

                    {/* Section Nous Contacter */}
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            Nous contacter
                        </Typography>
                        <Typography variant="body1">XX.XX.XX.XX.XX</Typography>
                        <Typography variant="body1">
                            <Link href="mailto:service-client@plantcare.com" color="inherit" underline="none">
                                service-client@plantcare.com
                            </Link>
                        </Typography>
                        <Stack direction="row" spacing={2} marginTop={1}>
                            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                                  color="inherit">
                                <Facebook/>
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                                  color="inherit">
                                <Instagram/>
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                                  color="inherit">
                                <Twitter/>
                            </Link>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default FooterComponent;

