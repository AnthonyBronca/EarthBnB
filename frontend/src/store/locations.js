import { csrfFetch } from './csrf';

const ADD_LOCATIONS = 'locations/addLocations'; //action type
// const ADD_NEW_LOCATION = 'locations/addNewLocation'

const addLocations = (locations) => { //action creator. creates action
  return { //action
    type: ADD_LOCATIONS,
    payload: locations
  };
};

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
  return response
}

export const getLocations = () => async (dispatch) => {
  const response = await csrfFetch("/locations");
  const locations = await response.json();
  // this is literally store.dispatch
  dispatch(addLocations(locations));
  return response;
};

const initialState = [];

const locationReducer = (state = initialState, action) => { //reducer updates the state
  switch (action.type) {
    case ADD_LOCATIONS:
      return action.payload
    default:
      return state;
  }
};

export default locationReducer;
