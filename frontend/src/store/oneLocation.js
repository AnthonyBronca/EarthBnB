// import { csrfFetch } from './csrf';

// const GET_LOCATION = 'locations/getLocation';
// const EDIT_LOCATION = 'locations/editLocation';


// const getLocation = (location) => {
//     return {
//       type: GET_LOCATION,
//       payload: location
//     };
//   };

// const editLocation = (location) => {
//     return {
//         type: EDIT_LOCATION,
//         payload: location
//     };
// };


//   export const getOneLocation = (locationId) => async (dispatch) => {
//     const response = await csrfFetch('/locations/:id');
//     const location = await response.json();
//     dispatch(getLocation(location));
//     return response
//   }

//   export const updateLocation = (formValues) => async (dispatch) => {
//       const options = {
//           method: 'PUT',
//           Headers: {'Content-type': 'application/json'},
//           body: JSON.stringify(formValues)
//       }
//       const response = await csrfFetch('/locations/:id', options);
//       const location = await response.json();
//       dispatch(editLocation(location));
//       return response;
//   }




// let initialState = [];


// const oneLocationReducer = (state = initialState, action) => { //reducer updates the state
//     switch (action.type) {
//       case GET_LOCATION:
//         return action.payload;
//         case EDIT_LOCATION:
//            const filteredArr = initialState.filter(location => {
//                if (location !== action.type) return location});
//             return [...filteredArr, action.payload];
//       default:
//         return state;
//     }
//   };

// export default oneLocationReducer
