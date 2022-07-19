import { Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const ProtectedRoute = ({ protect, children }) => {

  const { authState : { authLoading, isAuthenticated} } = useContext(AuthContext)
  
  if (authLoading)
		return (
			<div>
				loading...99%
			</div>
		)
  console.log("protect router", isAuthenticated)
  if ( protect && !isAuthenticated ) {
    
    return <Navigate to="/login" replace />
  }
  return children;
}

export default ProtectedRoute