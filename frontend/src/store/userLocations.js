import { csrfFetch } from './csrf';

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
    const response = await csrfFetch(`/user/${userId}/locations`);
    const locations = await response.json();


    dispatch(addUserLocations(locations));
    return response
  }

  export const deleteUserLocations = (locationId) => async (dispatch)=> {
      const response = await csrfFetch(`/locations/${locationId}`, {method: 'DELETE'});
      const location = await response.json();
      dispatch(deleteUserLocation(location))
      return response
  }


  export const updateLocation = (formValues) => async (dispatch) => {
    const options = {
        method: 'PUT',
        Headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formValues)
    }
    const response = await csrfFetch('/locations/:id', options);
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
          // const id = action.payload.id;
        //    const filteredArr = initialState.filter(location => {
        //        if (location !== action.type) return location});
        //     return [...filteredArr, action.payload];
    default:
      return state;
  }
};

export default userLocationReducer
