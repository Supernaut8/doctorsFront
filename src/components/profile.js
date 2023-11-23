import LetterAvatars from "./avatar";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link as LinkRouter } from 'react-router-dom';

function Profile() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            backgroundImage: `url("/main_swiper_1.jpeg")`,
            backgroundSize: 'cover',
            opacity: 0.5
        }}>
            <Box className="containerProfile"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pt: 10,
                    mb: 20,
                    maxWidth: '380px',
                    opacity: 1
                    // border: '1px solid black'
                    // backgroundImage: `url("/main_swiper_1.jpeg")`,
                    // backgroundSize: 'cover'
                }}
            >
                <Box className="containerAvatar"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        mb: 10,
                        border: '1px solid black',
                        borderRadius: '8px',
                        opacity: 1
                    }}
                >
                    <LetterAvatars />
                    <Box component={"div"}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="p"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '30px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'black',
                            }}
                        >
                            Name Surname
                        </Typography>
                        <Typography variant="p"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '22px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'black',
                            }}
                        >
                            ejemplo@email.com
                        </Typography>
                    </Box>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        border: '1px solid black',
                        borderTopRightRadius: '8px',
                        borderTopLeftRadius: '8px',
                    }}
                >
                    <PortraitIcon sx={{ height: '50px', width: '50px' }} />
                    <Typography variant="span"
                        sx={{
                            fontFamily: 'rubik',
                            fontSize: '20px',
                            fontWeight: 70,
                            letterSpacing: '.3rem',
                            color: 'black',
                        }}
                    >
                        Personal information
                    </Typography>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        border: '1px solid black'
                    }}
                >
                    <AccountBoxIcon sx={{ height: '50px', width: '50px' }} />
                    <Typography variant="p"
                        sx={{
                            fontFamily: 'rubik',
                            fontSize: '20px',
                            fontWeight: 70,
                            letterSpacing: '.3rem',
                            color: 'black',
                        }}
                    >
                        Account data
                    </Typography>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        border: '1px solid black'
                    }}
                >
                    <PlaceIcon sx={{ height: '50px', width: '50px' }} />
                    <Typography variant="p"
                        sx={{
                            fontFamily: 'rubik',
                            fontSize: '20px',
                            fontWeight: 70,
                            letterSpacing: '.3rem',
                            color: 'black',
                        }}
                    >
                        Address
                    </Typography>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        border: '1px solid black',
                        borderBottomRightRadius: '8px',
                        borderBottomLeftRadius: '8px',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/medicalAppointments'>
                        <CalendarMonthIcon sx={{ height: '50px', width: '50px' }} />
                        <Typography variant="p"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '20px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'black',
                            }}
                        >
                            Pending medical appointments
                        </Typography>
                    </LinkRouter>
                </Box>
            </Box>
        </Box>
    );
}

export default Profile;