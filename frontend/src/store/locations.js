import NewLocationForm from '../components/NewLocationForm';
import { csrfFetch } from './csrf';

const ADD_LOCATIONS = 'locations/addLocations'; //action type
// const ADD_NEW_LOCATION = 'locations/addNewLocation'
// const DELETE_LOCATION = 'locations/deleteLocation'
// const EDIT_LOCATION = 'locations/editLocation';
const ADD_USER_LOCATIONS = 'locations/addUserLocations'


const addLocations = (locations) => { //action creator. creates action
  return { //action
    type: ADD_LOCATIONS,
    payload: locations
  };
};

// const deleteLocation = (location) => {
//   return {
//       type: DELETE_LOCATION,
//       payload: location
//   }
// }

// const editLocation = (location) => {
//   return {
//       type: EDIT_LOCATION,
//       payload: location
//   };
// };

const addUserLocations = (locations) => {
  return {
    type: ADD_USER_LOCATIONS,
    payload: locations
  }
}


// const addNewLocation = () => {
//   return {
//     type: ADD_NEW_LOCATION,
//   }
// } add this action and case in reducer to increase speed of render later

export const postNewLocation = (formValues) => async (dispatch) =>{

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formValues)
  }
  const response = await csrfFetch("/locations/new", options)
  const locations = await response.json()
  // const newLocation = await response.json();
  dispatch(addLocations(locations));
  return locations
}

// export const getUserLocations = (userId) => async (dispatch) => {
//   const response = await csrfFetch(`/user/${userId}/locations`);
//   const locations = await response.json();
//   dispatch(addUserLocations(locations));
//   return locations
// }


// export const deleteUserLocation = (locationId) => async (dispatch)=> {
//   const response = await csrfFetch(`/locations/${locationId}`, {method: 'DELETE'});
//   const location = await response.json();
//   dispatch(deleteLocation(location))
//   return response
// }

// export const updateLocation = (formValues) => async (dispatch) => {
//   const options = {
//       method: 'PUT',
//       Headers: {'Content-type': 'application/json'},
//       body: JSON.stringify(formValues)
//   }
//   const response = await csrfFetch('/locations/:id', options);
//   const location = await response.json();
//   dispatch(editLocation(location));
//   return location;
// }

// export const getOneLocation = (locationId) => async (dispatch) => {
//   const response = await csrfFetch('/locations/:id');
//   const location = await response.json();
//   dispatch(getLocation(location));
//   return response
// }

export const getLocations = () => async (dispatch) => {
  const response = await csrfFetch("/locations");
  const locations = await response.json();
  // this is literally store.dispatch
  dispatch(addLocations(locations));
  return response;
};

const initialState = {};

//newState = {...initialState} -> {allLocations: [locations]}
const locationReducer = (state = initialState, action) => { //reducer updates the state
  let newState;
  switch (action.type) {
    case ADD_LOCATIONS:
      newState = {...state};
      action.payload.forEach(location => {
        newState[location.id] = location
      })
      return newState;
      //payload is an object=> {id:66, userId: 5, address: '3200 N Alafaya Trail}
    // case ADD_USER_LOCATIONS:
    //   newState = {...state};
    //   const userId = action.payload.id
    //   newState.allLocations = newState.allLocations.filter(location => {
    //     if(userId === location.userId) return location
    //   })
    //   return newState
    default:
      return state;
  }
};



export default locationReducer;
