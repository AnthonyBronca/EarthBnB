import { csrfFetch } from './csrf';

const GET_REVIEWS = 'reviews/getReviews';
const ADD_REVIEW = 'reviews/addReview';

const getReview = (reviews) =>{
    return {
        type: GET_REVIEWS,
        payload: reviews
    };
};

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}


export const getUserReviews = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/user/${userId}/reviews`);
    const reviews = await response.json();
    dispatch(getReview(reviews));
    return response;
};

export const addNewReview = (formValues, userId) => async (dispatch) => {
    const option = {
        method: 'POST',
        Headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formValues)
    }
    const response = await csrfFetch(`/api/user/${userId}/reviews`, option);
    const review = await response.json();
    dispatch(addReview(review))
    return response;
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case GET_REVIEWS:
            newState = {...state} // {}
            console.log(action.payload)
      action.payload.forEach(review=>{
        newState[review.id] = review
      })
      console.log(newState, "this is initial state")
      return newState
      case ADD_REVIEW:
            newState = { ...state };
            newState[action.payload.id] = action.payload
            return newState
        default:
        return state;
    }
}

export default reviewReducer
