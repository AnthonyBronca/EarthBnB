import { csrfFetch } from './csrf';

const ADD_USER_LOCATIONS = 'locations/addUserLocations'


const addUserLocations = (locations) => {
    return {
      type: ADD_USER_LOCATIONS,
      payload: locations
    }
  }

  export const getUserLocations = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/user/${userId}/locations`);
    const locations = await response.json();

    console.log(locations, "this is locations *********")


    dispatch(addUserLocations(locations));
    return response
  }



const initialState = []

const userLocationReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_USER_LOCATIONS:
      return action.payload
    default:
      return state;
  }
};

export default userLocationReducer
