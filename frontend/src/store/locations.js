import { csrfFetch } from './csrf';

const ADD_LOCATIONS = 'locations/addLocations'; //action type
const ADD_USER_LOCATIONS = 'locations/addUserLocations'


const addLocations = (locations) => { //action creator. creates action
  return { //action
    type: ADD_LOCATIONS,
    payload: locations
  };
};

const addUserLocations = (locations) => {
  return {
    type: ADD_USER_LOCATIONS,
    payload: locations
  }
}


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
