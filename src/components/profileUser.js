
// //import LetterAvatars from "./avatar";
// import { Box ,Avatar} from "@mui/material";
// import Typography from '@mui/material/Typography';
// import PortraitIcon from '@mui/icons-material/Portrait';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import PlaceIcon from '@mui/icons-material/Place';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { Link as LinkRouter } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux"



// export function Profile() {

//     const userLoged = useSelector(storage => storage.storeUser.userReducer.user);
//     const username = userLoged.fullName;

//     function InicialesMayus(str) {
//         return str.replace(/\b\w/g, (match) => match.toUpperCase());
//     }

//     return (
//         <Box sx={{
//             pb:10,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             width: '100%',
//             minHeight: '600px',
//             backgroundImage: `url("/ramdonMedics1.png")`,
//             backgroundSize: 'cover',
//             // backgroundColor: 'rgb(220, 232, 232)'
//         }}>
//             <Box className="containerProfile"
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     // justifyContent: 'center',
//                     alignItems: 'center',
//                     // pb: 20,
//                     // maxWidth: '400px',
//                     height: '200px'
//                     // backgroundSize: 'cover',
//                     // width: '100%',
//                     // backgroundColor: 'rgb(220, 232, 232)'
//                     // border: '1px solid white'
//                     // backgroundImage: `url("/ramdonMedics1.png")`,
//                     // backgroundSize: 'cover'
//                 }}
//             >
//                 <Box className="containerAvatar"
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         flexWrap: 'wrap',
//                         justifyContent: 'center',
//                         mb: 5,
//                         maxWidth: '450px',
//                         border: '1px solid black',
//                         borderRadius: '8px',
//                         backgroundColor: '#1E4D7B',
//                     }}
//                 >
//                     <Avatar />
//                     <Box component={"div"}
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Typography variant="p"
//                             sx={{
//                                 fontFamily: 'rubik',
//                                 fontSize: '30px',
//                                 fontWeight: 70,
//                                 letterSpacing: '.3rem',
//                                 maxWidth: '400px',
//                                 color: 'white',
//                             }}
//                         >
//                             {InicialesMayus(username)}
//                         </Typography>
//                         <Typography variant="p"
//                             sx={{
//                                 ml: 2,
//                                 fontFamily: 'rubik',
//                                 fontSize: '22px',
//                                 fontWeight: 70,
//                                 letterSpacing: '.3rem',
//                                 maxWidth: '400px',
//                                 color: 'white',
//                             }}
//                         >
//                             {userLoged.email}
//                         </Typography>
//                     </Box>
//                 </Box>
                
//             </Box>
//             <Box component={"div"}
//                     sx={{
                        
//                         display: 'flex',
//                         flexDirection: 'row',
//                         justifyContent: 'start',
//                         alignItems: 'center',
//                         maxWidth: '450px',
//                         borderTop: '1px solid black',
//                         borderLeft: '1px solid black',
//                         borderRight: '1px solid black',
//                         borderTopRightRadius: '8px',
//                         borderTopLeftRadius: '8px',
//                         backgroundColor: '#1E4D7B',
//                     }}
//                 >
//                     <LinkRouter className='btn_turnos' to='/'>
//                         <PortraitIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
//                         <Typography variant="span"
//                             sx={{
//                                 fontFamily: 'rubik',
//                                 fontSize: '20px',
//                                 fontWeight: 70,
//                                 letterSpacing: '.3rem',
//                                 color: 'white',
//                             }}
//                         >
//                             Personal information
//                         </Typography>
//                     </LinkRouter>
//                 </Box>
//                 <Box component={"div"}
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         maxWidth: '450px',
//                         borderTop: '1px solid black',
//                         borderLeft: '1px solid black',
//                         borderRight: '1px solid black',
//                         backgroundColor: '#1E4D7B',
//                     }}
//                 >
//                     <LinkRouter className='btn_turnos' to='/'>
//                         <AccountBoxIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
//                         <Typography variant="p"
//                             sx={{
//                                 fontFamily: 'rubik',
//                                 fontSize: '20px',
//                                 fontWeight: 70,
//                                 letterSpacing: '.3rem',
//                                 color: 'white',
//                             }}
//                         >
//                             Account data
//                         </Typography>
//                     </LinkRouter>
//                 </Box>
//                 <Box component={"div"}
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         maxWidth: '450px',
//                         borderTop: '1px solid black',
//                         borderLeft: '1px solid black',
//                         borderRight: '1px solid black',
//                         backgroundColor: '#1E4D7B',
//                     }}
//                 >
//                     <LinkRouter className='btn_turnos' to='/'>
//                         <PlaceIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
//                         <Typography variant="p"
//                             sx={{
//                                 fontFamily: 'rubik',
//                                 fontSize: '20px',
//                                 fontWeight: 70,
//                                 letterSpacing: '.3rem',
//                                 color: 'white',
//                             }}
//                         >
//                             Address
//                         </Typography>
//                     </LinkRouter>
//                 </Box>
//                 <Box component={"div"}
//                     sx={{
//                         // mb:10,
//                         display: 'flex',
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         maxWidth: '450px',
//                         border: '1px solid black',
//                         borderBottomRightRadius: '8px',
//                         borderBottomLeftRadius: '8px',
//                         backgroundColor: '#1E4D7B',
//                     }}
//                 >
//                     <LinkRouter className='btn_turnos' to='/medicalAppointments'>
//                         <CalendarMonthIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
//                         <Typography variant="p"
//                             sx={{
//                                 fontFamily: 'rubik',
//                                 fontSize: '20px',
//                                 fontWeight: 70,
//                                 letterSpacing: '.3rem',
//                                 color: 'white',
//                             }}
//                         >
//                             Medical appointments
//                         </Typography>
//                     </LinkRouter>
//                 </Box>
//         </Box>
//     );
// }



import LetterAvatars from "./avatar";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link as LinkRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
//import '../styles/profile.css'



function Profile() {

const userLoged = useSelector(storage => storage.storeUser.userReducer.user);
const username = userLoged.fullName;

    function InicialesMayus(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    return (
        <Box sx={{
            pb:10,
            pt:10,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'Wrap',
            justifyContent: 'space-evenly',
            width: '100%',
            height: '80vh',
            backgroundImage: `url("/ramdonMedics1.png")`,
            backgroundSize: 'cover',
            // backgroundColor: 'rgb(220, 232, 232)'
        }}>
            <Box className="containerProfile"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'left',
                    // pb: 20,
                    // maxWidth: '400px',
                    // height: '200px'
                    // backgroundSize: 'cover',
                    // width: '100%',
                    // backgroundColor: 'rgb(220, 232, 232)'
                    // border: '1px solid white'
                    // backgroundImage: `url("/ramdonMedics1.png")`,
                    // backgroundSize: 'cover'
                }}
            >
                <Box className="containerAvatar"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        mb: 5,
                        maxWidth: '450px',
                        border: '1px solid black',
                        borderRadius: '8px',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LetterAvatars username = {username} />
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
                                maxWidth: '400px',
                                color: 'white',
                            }}
                        >   
                            {InicialesMayus(username)}
                        </Typography>
                        <Typography variant="p"
                            sx={{
                                ml: 2,
                                fontFamily: 'rubik',
                                fontSize: '22px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                maxWidth: '400px',
                                color: 'white',
                            }}
                        >
                            {userLoged.email}
                        </Typography>
                    </Box>
                </Box>
                
            </Box>
            <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',                    
                        
                    }}
                >
            <Box component={"div"}
                    sx={{
                        
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '450px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        borderTopRightRadius: '8px',
                        borderTopLeftRadius: '8px',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/'>
                        <PortraitIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography variant="span"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '20px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'white',
                            }}
                        >
                            Personal information
                        </Typography>
                    </LinkRouter>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '450px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/'>
                        <AccountBoxIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography variant="p"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '20px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'white',
                            }}
                        >
                            Account data
                        </Typography>
                    </LinkRouter>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '450px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/'>
                        <PlaceIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography variant="p"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '20px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'white',
                            }}
                        >
                            Address
                        </Typography>
                    </LinkRouter>
                </Box>
                <Box component={"div"}
                    sx={{
                        // mb:10,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '450px',
                        border: '1px solid black',
                        borderBottomRightRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/medicalAppointments'>
                        <CalendarMonthIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography variant="p"
                            sx={{
                                fontFamily: 'rubik',
                                fontSize: '20px',
                                fontWeight: 70,
                                letterSpacing: '.3rem',
                                color: 'white',
                            }}
                        >
                            Associated plans
                        </Typography>
                    </LinkRouter>
                </Box>
                </Box>
        </Box>
    );
}

export default Profile;