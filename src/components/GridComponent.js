import React from "react";
import '../styles/GridComponent.css';
import { Grid } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MasksIcon from '@mui/icons-material/Masks';

function GridComponent() {
    return (
        <Grid container className="grid-container">
            <Grid item className="grid-item">
                <div className="iconConten">
                    <LocalHospitalIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Resultados de Laboratorio</div>
                <div>Solicitá tus resultados via web o consultalos online</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MedicalInformationIcon className="icon" />
                </div>
                <div>Apto Médico</div>
                <div>Obtené el certificado en el momento o via correo electrónico</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MedicalServicesIcon className="icon" />
                </div>
                <div>Guardia</div>
                <div>Consultá por los especialistas</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MasksIcon className="icon" />
                </div>
                <div>Dengue</div>
                <div>Novedades e información</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <VaccinesIcon className="icon" />
                </div>
                <div>Vacunación</div>
                <div>Gripe, Covid, Hepatitis, etc</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon"  />
                </div>
                <div>Donación de Sangre</div>
                <div>Sedes cercanas a tu barrio</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Cursos y Capacitaciones</div>
                <div>Mas info en...</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Horarios de visitas</div>
                <div>Horarios</div>
            </Grid>
        </Grid>
    );
}

export default GridComponent;