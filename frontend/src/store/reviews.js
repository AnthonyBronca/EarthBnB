import { csrfFetch } from './csrf';

const GET_REVIEWS = 'reviews/getReviews';

const getReview = (reviews) =>{
    return {
        type: GET_REVIEWS,
        payload: reviews
    };
};


export const getUserReviews = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/user/${userId}/reviews`);
    const reviews = await response.json();
    dispatch(getReview(reviews));
    return response;
};

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
        default:
        return state;
    }
}

export default reviewReducer
