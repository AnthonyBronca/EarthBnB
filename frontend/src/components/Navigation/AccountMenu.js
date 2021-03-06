import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import Settings from '../Settings/Settings.js';

// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLetter = useSelector((state)=> state.session.user.username[0]);
    const user = useSelector((state)=> state.session.user.username);
    const userId = useSelector((state)=> state.session.user.id);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const goToProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/users/${user}`)
  }

  const goToSettings = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/users/${user}/settings`)
  }

  const addNewListing = () => {
    history.push('/locations/new')
  }

  const goToListings = () => {
    history.push(`/user/${userId}/locations`)
  }

  return (
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
            <Avatar sx={{ width: 32, height: 32, 'bgcolor':'FF375D'}}>{userLetter.toUpperCase()}</Avatar>
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
        <MenuItem style={{'fontSize': '12px'}} onClick={goToProfile}>
          <Avatar sx={{bgcolor: 'FF375D'}}>{userLetter.toUpperCase()}</Avatar> My account
        </MenuItem>
        <Divider />
        <MenuItem style={{'fontSize': '12px'}} onClick={goToSettings}>
          <ListItemIcon>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem style={{'fontSize': '12px'}} onClick={addNewListing}>
          <ListItemIcon>
            {/* <Logout fontSize="small" /> */}
          </ListItemIcon>
          Host your home
        </MenuItem>
        <MenuItem style={{'fontSize': '12px'}} onClick={goToListings}>
          <ListItemIcon>
            {/* <Logout fontSize="small" /> */}
          </ListItemIcon>
          Your Listings
        </MenuItem>
        <MenuItem style={{'fontSize': '12px'}} onClick={logout}>
          <ListItemIcon>
            {/* <Logout fontSize="small" /> */}
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
