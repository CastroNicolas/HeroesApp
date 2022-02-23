import { useEffect, useReducer } from "react"


import { authContext } from "./auth/authContex"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./Routers/AppRouter"


const init = () => {

  return JSON.parse( localStorage.getItem('user') ) || { logged: false } 
}


export const HeroesApp = () => {


  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    
    if (!user)return

    localStorage.setItem('user', JSON.stringify(user))
    

  }, [user])
  




  return (
    <authContext.Provider value={{
      user, 
      dispatch
    }}>
      <AppRouter/>
    </authContext.Provider>
  )
}
