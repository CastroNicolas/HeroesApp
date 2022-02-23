import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { authContext } from "../auth/authContex"


export const PublicRoute = ({children}) => {

    const {user} = useContext(authContext)

  return user.logged
    ? <Navigate to='/marvel' /> 
    : children

}
