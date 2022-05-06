import { csrfFetch } from "./csrf";

const GET_BOOKINGS = 'bookings/getBookings';


const addBookings = (bookings) => {
    return {
        type: GET_BOOKINGS,
        payload: bookings
    }
}


export const getAllBookings = (userId) =>  async (dispatch)  => {
    const response = await csrfFetch(`/api/user/${userId}/bookings`)
    const bookings = await response.json()
    dispatch(addBookings(bookings));
    return bookings;
}

const initialState = {}

const bookingsReducer = (state = initialState, action) =>{
let newState;
switch(action.type){
        case GET_BOOKINGS:
            newState = {...state};
            const bookingData = action.payload;
            newState.bookingAndLocations = bookingData;

            // bookingData.forEach(el => newState.locations = el)
            const imageItems = action.payload;
            // imageData.forEach(el=> newState.imageItems = el)
            newState.imageData = imageItems
            return newState
    //   action.payload.forEach(booking => {
    //     newState[booking.id] = booking
    //   })
        default:
            return state;
    }
}

export default bookingsReducer
