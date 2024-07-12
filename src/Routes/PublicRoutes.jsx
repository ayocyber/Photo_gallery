import React from 'react'
import { AuthContext } from '../Context/Auth'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({children}) => {
    const {user} = React.useContext(AuthContext)
    
    console.log(user)
   
    if(user){
        return <Navigate to="/" replace={true}/>
    }
  return children
}

export default PublicRoutes
