import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./locations";
import sessionReducer from './session';
import userLocationReducer from "./userLocations";
import bookingsReducer from "./bookings";
import reviewReducer from "./reviews";
import oneLocationReducer from "./oneLocation";
// preloadState: {
//   session: sessionInfo,
//   posts: listOfPosts,
//   users: listsOfUsers
// }
const rootReducer = combineReducers({
  session: sessionReducer,
  locations: locationReducer,
  userLocations: userLocationReducer,
  bookings: bookingsReducer,
  reviews: reviewReducer,
  oneLocation: oneLocationReducer
  // posts: postsReducer,
  // users: usersReducers
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
