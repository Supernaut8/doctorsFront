import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { MDBIcon } from 'mdb-react-ui-kit';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import '../styles/AppBarMUI.css'
import { Link as LinkRouter } from 'react-router-dom'
import {useSelector} from "react-redux"

function AppBarMUI() {
  
  const userExist=useSelector(storage=>storage.storeUser.userReducer.user)
  const settingInitials=[ 
    <LinkRouter to="/profile" className="links_router">Profile</LinkRouter>,
    <LinkRouter to="/signIn" className="links_router">SignIn</LinkRouter>,
    <LinkRouter to="/signUp" className="links_router">SignUp</LinkRouter>,
  ];
  const pages = [<LinkRouter to="/Insurances" className="links_router">Health Insurances</LinkRouter>,
                // <LinkRouter to="/boletin" className="links_router">Boletín institucional</LinkRouter> ,
                <LinkRouter to="/about_us" className="links_router">About us</LinkRouter>,
                // <LinkRouter to="/Consultas" className="links_router">Consultas</LinkRouter>,
                <LinkRouter to="/Reservations" className="links_router">Reservations</LinkRouter>];
  
  const settings =!userExist?settingInitials.filter(setting=>setting.props.children!=="Profile")
                              : settingInitials.filter(setting=>setting.props.children!=="SignIn" && setting.props.children!=="SignUp")
                           
  const lettersName=userExist? (userExist.fullName.split(" ")).map(word=>word[0].toUpperCase()).join(""): "T"
  
  



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E4D7B' }}>
      <Container maxWidth="xl" className='navContainer'>
        <Toolbar className='appBar' disableGutters>
          <LinkRouter className="links_router" to="/">
            <LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'red' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NRMC
            </Typography>
          </LinkRouter>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{color:"green"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalHospitalIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'red' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NRMC
          </Typography>
          <Box className="btn-container" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {!userExist?  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />:<Avatar>{lettersName}</Avatar>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu} sx={{ backgroundColor:'#1E4D7B' }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarMUI;
