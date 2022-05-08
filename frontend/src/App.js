import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Locations from "./components/LocationPage";
import NewLocationForm from "./components/NewLocationForm";
import UserListingsPage from "./components/UserListingsPage";
import LocationEditForm from "./components/LocationEditForm";
// import Bookings from "./components/Bookings";
// import Reviews from "./components/Reviews";
import OneLocation from "./components/OneLocation";
import Errors from "./components/Errors";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  //delete the test stuff
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
         <Route exact path="/">
           <Locations />
         </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/locations/new'>
            <NewLocationForm />
          </Route>
          <Route exact path='/locations'>
            <Locations />
          </Route>
          <Route path='/user/:id/locations'>
            <UserListingsPage />
          </Route>
          <Route path='/locations/:id/edit-form'>
            <LocationEditForm />
          </Route>
          {/* <Route path='/user/:id/bookings'>
            <Bookings />
          </Route> */}
          {/* <Route path='/user/:id/reviews'>
            <Reviews />
          </Route> */}
          <Route path='/locations/:id'>
          <OneLocation />
          </Route>
          <Errors />
        </Switch>
      )}
    </>
  );
}

export default App;
