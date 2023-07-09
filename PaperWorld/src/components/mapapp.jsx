import { Grid } from "@mui/material";
import React from "react";

import "../styles/mapapp.css";
const MapApp = () => {
    const handleClick = (e) => {
        console.log(e.target.name);
    };

    return (
        <div className="map">
            {/* 24w x 18h  */}
            <Grid container spacing={0}>
                <Grid item xs={1}>
                    <button
                        className="pink a1"
                        name="a1"
                        onClick={handleClick}
                    >
                        A1
                    </button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MapApp;
