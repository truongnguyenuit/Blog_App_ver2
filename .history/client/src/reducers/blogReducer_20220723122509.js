export const blogReducer = (state, action) => {

  const { type, payload } = action
  console.log("inreducer",postsLoading)
  switch (type) {
    case 'POSTS_LOADED_SUCCESS':
      return {
        ...state,
        posts: payload,
        postsLoading: false,
        
      }

    case 'ADD_BLOG': 
      return {
        ...state,
        posts: [...state.posts, post]
      }
      default:
        return state

  }
}