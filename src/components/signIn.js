import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GoogleIcon from '@mui/icons-material/Google';
import userActions from '../redux/actions/usersActions';
import { useDispatch } from 'react-redux';



export default function SignInForm() {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
      from: "signUp-form"
    };
    dispatch(userActions.SignInUser(userData))
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box className="containerSignIn" sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      pb: 15,
      // alignItems: 'center',
      // p: 15,
      width: '100vw',
      backgroundImage: `url("/main_swiper_1.jpeg")`,
      backgroundSize: 'cover'
    }} >
      <Box component={"div"}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          mt: 10,
          backgroundColor: '#1E4D7B',
          // ml: 5,
          // mr: 20,
          width: '40ch',
          height: '70ch',
          border: '1px solid black',
          borderRadius: 4
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': {
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              mt: 2,
              mb: 2,
              width: '25ch',
              backgroundColor: 'white',
              color: 'green'
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="logoContainer">
            <LocalHospitalIcon sx={{ color: 'red' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              DRFR
            </Typography>
          </div>
          <Typography variant="p"
            noWrap
            sx={{
              fontFamily: 'rubik',
              fontSize: '30px',
              fontWeight: 70,
              letterSpacing: '.3rem',
              color: 'white',
            }}
          >
            Sign in
          </Typography>
          <div>
            <TextField
              name="email"
              required
              id="email"
              label="Email address"
              defaultValue=""
            />
            <TextField
              name="password"
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div>
            <input
              type='submit'
              style={{
                borderRadius: '8px',
                borderStyle: 'none',
                fontFamily: 'Open Sans',
                color: 'white',
                backgroundColor: 'green',

              }}
            >

            </input>
            {/* </LinkRouter> */}
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
            <Checkbox sx={{
              backgroundColor: 'white'
            }}{...label} />
            <Typography variant="span"
              sx={{
                ml: 2,
                fontFamily: 'rubik',
                fontSize: '16px',
                letterSpacing: '.3rem',
                color: 'white',
              }}
            >
              Remember me
            </Typography>
          </div>
          <div>
            <LinkRouter className='btn_forgotPass' to='/forgotPass'>
              <Typography variant="p"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3,
                  fontFamily: 'rubik',
                  fontSize: '16px',
                  letterSpacing: '.3rem',
                  color: 'white',
                }}
              >
                Forgot your password?
              </Typography>
            </LinkRouter>
          </div>
          <Box component={"div"}
            sx={{
              mt: 2,
            }}
          >
            <LinkRouter className='btn_google' to='/https://www.google.com/?hl=es'>
              <GoogleIcon sx={{ color: 'white' }} />
              <Typography variant="p"
                sx={{
                  m: 2,
                  fontFamily: 'rubik',
                  fontSize: '16px',
                  letterSpacing: '.3rem',
                  color: 'white',
                }}
              >
                Google
              </Typography>
            </LinkRouter>
          </Box>
          <div>
            <LinkRouter className='btn_details' to='/signUp'>
              <Typography variant="p"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 5,
                  fontFamily: 'rubik',
                  fontSize: '16px',
                  letterSpacing: '.3rem',
                  color: 'white',
                }}
              >
                Create account
              </Typography>
            </LinkRouter>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
