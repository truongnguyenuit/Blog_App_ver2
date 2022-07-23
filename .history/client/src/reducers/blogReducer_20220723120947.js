export const blogReducer = (state, action) => {

  const { type, payload: { postsLoading, posts, } } = action
  
  switch (type) {
    case 'POSTS_LOADED_SUCCESS':
      return {
        ...state,
        posts: posts,
        postLoading: postsLoading
        
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