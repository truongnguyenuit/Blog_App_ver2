export const authReducer = (state, action) => {
  
  const { type, payload: { isAuthenticated, user} } = action
  

  switch (type) {
    case 'SET_AUTH': 
    {
      
      return {
        ...state,
        authLoading: false,
        isAuthenticated: true,
        user
      }
    }
    default: 
    {
      return state
    }
  }
  
}

