// import React, { useState } from "react";
import "../styles/about_us.css"
import Typography from '@mui/material/Typography';

const About_us = () => {
    return (
        <div className="nav_container">
            <Typography variant="h2"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'rubik',
                    fontSize: '30px',
                    fontWeight: 70,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
               About us ----- Sitio en construcción
            </Typography>
        </div>
    )
}

export default About_us;