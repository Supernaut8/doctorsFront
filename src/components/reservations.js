import { useEffect, useSelector, useDispatch, useState, useRef } from "react";
import { GetDoctors } from "../service/doctorService.js";
// import { Link as LinkRouter } from 'react-router-dom'
import { Grid } from '@mui/material';
import "../styles/reservations.css";
import DoctorCard from "./doctorCard.js";
import Typography from '@mui/material/Typography';

// import { useDispatch, useSelector } from "react-redux";
// import { loadMedics } from "../redux/actions/medicsActions";

function Reservations() {
    // const medics = useSelector((store) => store.storeMedics.medics);
    const [doctors, setDoctors] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    // const dispatch = useDispatch();

    useEffect(() => {
        GetDoctors()
            .then((doctorData) => {
                setDoctors(doctorData);
                setFilteredDoctors(doctorData);
            })
            .catch((error) => console.error("Error setting doctors:", error));
    }, []);

    useEffect(() => {
        const filtered = doctors.filter((doctor) =>
            doctor.specialty.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [searchValue, doctors]);
    return (
        // <div className="nav_container">
        //     <div key={medics._id} className="bg-white">
        //         <h2 className="text-red-700">{medics.name}</h2>
        //         <img className="w-[500px]" src={medics.image} alt="" />
        //     </div>
        // </div>
        <div className='searchMedics'>
            <div>
                <Typography variant="p"
                    sx={{
                        mr: 2,
                        fontFamily: 'rubik', 
                        fontSize: '40px',
                        fontWeight: 70,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    Search by specialty
                </Typography>
            </div>
            <input type="text" className="input_search" onChange={ (e) => setSearchValue(e.target.value)}/> 
            <Grid container className="grid-cards">
                {filteredDoctors.map((doctor, index) => (
                    <Grid item key={index} className="grid-card">
                        <DoctorCard doctor={doctor} />
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}

export default Reservations;