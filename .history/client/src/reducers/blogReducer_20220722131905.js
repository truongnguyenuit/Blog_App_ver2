export const blogReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_BLOG': 
      return {
        ...state,
        posts: [...state.posts, payload]
      }
      default:
        return state
  }
}