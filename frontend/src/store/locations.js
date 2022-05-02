
import { csrfFetch } from './csrf';

const ADD_LOCATIONS = 'locations/addLocations'; //action type

const addLocations = (locations) => { //action creator. creates action
  return { //action
    type: ADD_LOCATIONS,
    payload: locations
  };
};


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
