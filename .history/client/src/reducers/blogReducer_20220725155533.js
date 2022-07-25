export const blogReducer = (state, action) => {

  const { type, payload } = action

  switch (type) {
    case 'POSTS_LOADED_SUCCESS':
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      }
    case 'ALL_POSTS_LOADED_SUCCESS':
      return {
        ...state,
        allPosts: payload,
        postsLoading: false,
      }
    case 'ADD_BLOG':
      return {
        ...state,
        posts: [...state.posts, payload]
      }
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== payload)
        }
    default:
      return state

  }
}