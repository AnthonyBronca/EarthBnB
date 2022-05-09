import { csrfFetch } from './csrf';

const GET_REVIEWS = 'reviews/getReviews';
const ADD_REVIEW = 'reviews/addReview';
const DELETE_REVIEW = 'reviews/deleteReview';

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

const deleteReview = (deletedReview) => {
    return {
        type: DELETE_REVIEW,
        payload: deletedReview
    }
}


export const getUserReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/locations/${id}/reviews`);
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

export const deleteUserReview = (reviewId) => async (dispatch) => {
    const option = {
        method: 'DELETE'
    }

    const response = await csrfFetch(`/api/reviews/${reviewId}`,option)
    const deletedReview = await response.json()
    dispatch(deleteReview(deletedReview))
    return response
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
      case DELETE_REVIEW:
          newState = {... state};
         delete newState[action.payload.id]
         return newState
        default:
        return state;
    }
}

export default reviewReducer
