import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user)
  // const sessionUserId = useSelector(state => state.session.user.id)
console.log(sessionUser)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }


  return (
    <div id='nav-bar-box-container'>
    <ul>
      <ul id='nav-bar-items'>
        <div id='img-container'>
        <img id='logo-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'></img>
        </div>
        <NavLink className='navLinks' exact to="/locations">Home</NavLink>
        <NavLink className='navLinks' to={`/user/${sessionUser?.id}/reviews`}>Your Reviews</NavLink>
        <NavLink className='navLinks' to={'/locations/new'}>Add a listing</NavLink>
        <NavLink className='navLinks' to={`/user/${sessionUser?.id}/locations`}>Your Listings</NavLink>
        {isLoaded && sessionLinks}
      </ul>
    </ul>
    </div>
  );
}

export default Navigation;
