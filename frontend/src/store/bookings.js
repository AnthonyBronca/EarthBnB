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
    // console.log(bookings, "this is bookings from the thunk")
    return bookings;
}

const initialState = {}

const bookingsReducer = (state = initialState, action) =>{
let newState;
switch(action.type){
        case GET_BOOKINGS:
            newState = {...state};
            const bookings = action.payload.Bookings[0]
            newState['Bookings'] = bookings
            const bookingLocation = bookings.Location
            newState['Locations'] = bookingLocation
            newState['Images'] = bookingLocation.Images[0]
            return newState
    //   action.payload.forEach(booking => {
    //     newState[booking.id] = booking
    //   })
        default:
            return state;
    }
}

export default bookingsReducer
