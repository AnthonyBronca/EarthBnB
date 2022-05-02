// import { csrfFetch } from './csrf';

// const GET_LOCATIONS = 'GET/api/locations'

// export const getLocations = (res) => {
//     return {
//         type: GET_LOCATIONS,
//         payload: res
//     };
// }

// const action = {
//     type: GET_LOCATIONS
// }

// const initialState = {
//     locations: []
// }

// const locationReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_LOCATIONS:
//         return { ...state};

//         default:
//             return state

//     }
// };

// export const locationRetrieval = () => async (dispatch) => {
//     const response = await csrfFetch("/api/locations", {
//       method: "GET"
//     });
//     const data = await response.json();
//     console.log(data, 'this is data<<<<')
//     // this is literally store.dispatch
//     //dispatch(setUser(data.user));
//     return response;
//   };

// export default locationReducer


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
