import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../auth/authContex'
import { types } from '../../types/types'



export const Login = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)

  const handleLogin = () => {

    const action = {

      type: types.login,
      payload: {name: 'Nicolas'}

    };

    dispatch(action)

    const lastPath = localStorage.getItem('lastPath') || '/marvel'

    navigate( lastPath, {
      replace: true
    })
  }

  return (

    <div className='container mt-5'>
      
      <h1>Login</h1>
      <hr/>

      <button
        className='btn btn-primary'
        onClick={handleLogin}
      >
        Login
      </button>

    </div>

  )
}
