import React from "react";
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import img1 from '../images/ramdonMedics.png';


function DoctorCard({ doctor }) {
    return (
        <>
            <div className="logoContainer">
                <LocalHospitalIcon sx={{ color: 'red' }} />
                <Typography
                    variant="h6"
                    
                    // component="a"
                    // href="/"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        maxWidth: '180px'
                    }}
                >
                    DRFR
                </Typography>
            </div>
            <div className="imgContainer">
                <img src={img1} alt='imagen de {img1}' />
            </div>
            <div className="doctorDescription">
                <p className="fullName">{doctor.name} {doctor.lastName}</p>
                <p className="speciality">{doctor.specialty}</p>
                {/* <p className="license">{doctor.license}</p>
                <p className="name">Name:</p>
                <p className="lastName">LastName:</p>
                <p className="speciality">Speciality:</p>
                <p className="dni">DNI:</p> */}
            </div>
            <div className="btnContainer">
                <LinkRouter className='btn_details' to={`/doctor/${doctor._id}`}>
                    <Button variant="contained" style={{ fontFamily: 'Open Sans', backgroundColor: 'green' }}>Details</Button>
                </LinkRouter>
            </div>
        </>
    )
}

export default DoctorCard;