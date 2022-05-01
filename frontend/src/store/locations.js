import { csrfFetch } from './csrf';

const GET_LOCATIONS = 'GET/api/locations'

export const getLocations = (res) => {
    return {
        type: GET_LOCATIONS,
        payload: res
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

export const locationRetrieval = () => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    // this is literally store.dispatch
    dispatch(setUser(data.user));
    return response;
  };

export default locationReducer
