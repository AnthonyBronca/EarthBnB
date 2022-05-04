data flow:





plain js version:
state is a POJO;
ex: const state = {
    posts: [],
    users: [],
    date: [],
}

flow:
fetch posts
state.posts = res

redux version:

reducer (currentState, action) => next state

flow:
fetch posts
const action = {
    type: "ADD_POSTS" // or whatever action type you use,
    payload: res
}
store.dispatch(action)

basic reducer:

ex as switch:
const postsReducer = (currentState, action) => {
  switch(action.type) {
      case "ADD_POSTS": {
        // in redux state should be immutable
        const fetchedPosts = action.payload
        return posts
      }
      case "ADD_ONE_POST": {
        const newPost = action.payload
         return [...currentState.posts, newPost]

      }
      default:
        return currentState;
  }
}

action has the payload

ex as if/else:
const postsReducer = (currentState, action) => {

    if(action.type === "ADD_POSTS"){
        // in redux state should be immutable
        const fetchedPosts = action.payload
        return {
            posts
        }
    } else if (action.type === "ADD_ONE_POST") {
        const newPost = action.payload
         return {
            posts: [...currentState.posts, newPost]
        }
    } else {
        return currentState;
    }

}
