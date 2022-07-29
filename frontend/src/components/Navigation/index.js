import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { profileIcon } from './icons';
import LoginFormPage from '../LoginFormPage';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
  const history = useHistory('/')
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  // const sessionUserId = useSelector(state => state.session.user.id)


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [signInModal, setSignInModal] = useState(false);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  const sendToSignUp = () => {
    history.push('/signUp')
  }

  const signIn = () => {
    history.push('/signin')
  }

  const demo = () => {
    return dispatch(sessionActions.login({ credential:'FakeUser1', password:'password2' }))
  }

  const sendToListings = () => {
    history.push('/locations/new')
  }

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'white'}}>{profileIcon}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={sendToSignUp} style={{'fontSize': '12px', 'fontWeight': 'bold'}}>Sign up</MenuItem>
        <MenuItem onClick={signIn} style={{'fontSize': '12px'}}>Sign in</MenuItem>
        <MenuItem onClick={demo} style={{'fontSize': '12px'}}>Demo Sign in</MenuItem>
        <Divider />
        <MenuItem style={{'fontSize': '12px'}} onClick={sendToListings}>Host your home</MenuItem>
        <MenuItem style={{'fontSize': '12px'}}>About</MenuItem>
      </Menu>
    </React.Fragment>
        // {/* <NavLink id="sign-up-link" className='navLinks' to="/signup">Sign Up</NavLink>
        // <LoginFormModal /> */}
    );
  }

  const clickImage = () => {
    history.push('/')
  }



  return (
    <div id='nav-bar-box-container'>
      <div className='list-items'>
        {/* <ul className=''> */}
          <ul id='nav-bar-items'>
            <div id='img-container'>
              <a className='logo-a-img' onClick={(e) => clickImage()}>
                <img id='logo-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'></img>
              </a>
            </div>
            <NavLink className='navLinks' exact to="/locations">Home</NavLink>
            <NavLink className='navLinks' to={'/locations/new'}>Add a listing</NavLink>
            <NavLink className='navLinks' to={`/user/${sessionUser?.id}/locations`}>Your Listings</NavLink>
            {/* <NavLink className='navLinks' to='/bookings'>Bookings</NavLink> */}
            {isLoaded && sessionLinks}
          </ul>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Navigation;
