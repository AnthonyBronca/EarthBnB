import { csrfFetch } from './csrf';

const GET_LOCATIONS = 'GET/api/locations'

export const getLocations = () => {
    return {
        type: GET_LOCATIONS
    };
}

const action = {
    type: GET_LOCATIONS
}

const initialState = {
    locations: []
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS:
        return { ...state};

        default:
            return state

    }
};

export default locationReducer
