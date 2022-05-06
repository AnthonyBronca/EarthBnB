import { csrfFetch } from "./csrf";

const GET_ONE_LOCATION = 'oneLocation/getOneLocation';
const ADD_REVIEW = 'reviews/addReview';

const getOneLocationActionCreator = (location) => {
    return {
        type: GET_ONE_LOCATION,
        payload: location
    };
};

export const getOneLocation = (locationId) => async (dispatch) =>{
    const response = await csrfFetch(`/locations/${locationId}`);
    const location  = await response.json();
    dispatch(getOneLocationActionCreator(location))
    return response;
};


const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

export const addNewReview = (formValues, locationId) => async (dispatch) => {
    const option = {
        method: 'POST',
        Headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formValues)
    }
    const response = await csrfFetch(`/locations/${locationId}`, option);
    const review = await response.json();
    dispatch(addReview(review))
    return response;
}


const initialState = {}

const oneLocationReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case GET_ONE_LOCATION:
            newState = {...state};
            // console.log(action.payload, "payload");
            newState.location = action.payload
            return newState
        default:
            return state;
    }
};


export default oneLocationReducer
