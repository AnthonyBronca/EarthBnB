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
        <NavLink exact to="/locations">Home</NavLink>
        <NavLink to={'/locations/new'}>Add a listing</NavLink>
        <NavLink to={`/user/${sessionUser?.id}/locations`}>Your Listings</NavLink>
        {isLoaded && sessionLinks}
      </ul>
    </ul>
    </div>
  );
}

export default Navigation;
