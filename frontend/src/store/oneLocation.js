import { csrfFetch } from "./csrf";

const GET_ONE_LOCATION = 'oneLocation/getOneLocation';

const getOneLocationActionCreator = (location) => {
    return {
        type: GET_ONE_LOCATION,
        payload: location
    };
};

export const getOneLocation = (locationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/locations/${locationId}`);
    const location = await response.json();
    dispatch(getOneLocationActionCreator(location))
    return response;
};



const initialState = {}

const oneLocationReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ONE_LOCATION:
            newState = { ...state };
            // console.log(action.payload, "payload");
            newState.location = action.payload
            return newState
        default:
            return state;
    }
};


export default oneLocationReducer
