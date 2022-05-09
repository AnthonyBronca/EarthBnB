import { csrfFetch } from './csrf';
import { getLocations } from './locations';

const ADD_USER_LOCATIONS = 'locations/addUserLocations'
const DELETE_USER_LOCATION = 'locations/deleteUserLocation'
const EDIT_LOCATION = 'locations/editLocation';

const addUserLocations = (locations) => {
    return {
      type: ADD_USER_LOCATIONS,
      payload: locations
    }
  }

const deleteUserLocation = (location) => {
    return {
        type: DELETE_USER_LOCATION,
        payload: location
    }
}

const editLocation = (location) => {
  return {
      type: EDIT_LOCATION,
      payload: location
  };
};


  export const getUserLocations = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/user/${userId}/locations`);
    const locations = await response.json();


    dispatch(addUserLocations(locations));
    return response
  }

  export const deleteUserLocations = (locationId) => async (dispatch)=> {
      const response = await csrfFetch(`/api/locations/${locationId}`, {method: 'DELETE'});
      const location = await response.json();
      dispatch(deleteUserLocation(location))
      return location
  }


  export const updateLocation = (formValues) => async (dispatch) => {
    const options = {
        method: 'PUT',
        Headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formValues)
    }
    const response = await csrfFetch('/api/locations/:id', options);
    const location = await response.json();
    dispatch(editLocation(location));
    return response;
}



const initialState = {}

const userLocationReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case ADD_USER_LOCATIONS:
      newState = {...state} // {}
      action.payload.Locations.forEach(location=>{
        newState[location.id] = location
      })
      // console.log(newState, "this is initial state")
      return newState
      case DELETE_USER_LOCATION:
        newState = {...state};
          const id = action.payload.id
          delete newState[id]
        return newState;
        case EDIT_LOCATION:
          newState = {...state};
          const itemId = action.payload.id
          newState[itemId] = action.payload
            return newState
    default:
      return state;
  }
};

//payload for edit =  {id: 95, userId: 5, address: 'Spongebob Ln.', city:, state, price, userId,}

export default userLocationReducer
