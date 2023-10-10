
import  { Box, Grid, Typography } from "@mui/material";

import "./footer.css";
const Footer = () => {
  
    return (
        <Box className="footer" color="white" p={1} alignItems="center" textAlign="center">
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={12}>
              <span >Expo Santa Fe México Av. Santa Fe 270. Santa Fe. Zedec Sta Fé. Álvaro Obregón. 01210 Ciudad de México, CDMX</span>
            </Grid>
          </Grid>
        </Box>
      );
};

export default Footer;