import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import data from "../data.json";
import "./footer.css";
import { useLanguage } from '../../contexts/languageContext';
const Footer = () => {
    const { language } = useLanguage();
    const { contact } = data[language];

    return (
        <Box className="footer" color="white" p={2} textAlign="center">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {/* Contact Information Columns */}
                <Grid item xs={12} sm={4}>
                    <Typography>
                        {contact.technicalSupport}: <a href={`mailto:${contact.technicalSupportEmail}`}>j.urtuzuastegui@apw.enterprises</a>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>
                        {contact.customerSupport}: <a href={`mailto:${contact.customerSupportEmail}`}>info@apw.enterprises</a>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>
                        {contact.paymentSupport}: <a href={`mailto:${contact.paymentSupportEmail}`}>a.estrada@apw.enterprises</a>
                    </Typography>
                </Grid>
                {/* Address */}
                <Grid item xs={12}>
                    <Typography>
                        Expo Santa Fe México Av. Santa Fe 270. Santa Fe. Zedec Sta Fé. Álvaro Obregón. 01210 Ciudad de México, CDMX
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
