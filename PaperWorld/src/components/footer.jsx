import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import  { Box, Grid, Typography, Divider } from "@mui/material";

import "./footer.css";
const Footer = () => {
    return (
        <Box className="footer" color="white" p={1} alignItems="center" textAlign="center">
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={12}>
              <Typography variant="body2">Expo Santa Fe México Av. Santa Fe 270. Santa Fe. Zedec Sta Fé. Álvaro Obregón. 01210 Ciudad de México, CDMX</Typography>
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12} sm={12} container justifyContent="center">
        {/*       <Grid item sx={{ m: 1 }}>
                <a href="https://www.facebook.com/americaspaperworld"><FaFacebook /></a>
              </Grid>
              <Grid item sx={{ m: 1 }}>
                <a href="/"><FaInstagram /></a>
              </Grid>
              <Grid item sx={{ m: 1 }}>
                <a href="/"><FaTwitter /></a>
              </Grid> */}
            </Grid>
          </Grid>
        </Box>
      );
};

export default Footer;