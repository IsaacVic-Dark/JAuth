import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../services/authService'
import {useAuth} from '../services/authContext'

function Welcome() {
  const navigate = useNavigate()
  const { isLoggedIn, user } = useAuth() // Correct destructuring

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  return (
    <>
      {isLoggedIn && user ? (
        <>
          <h1>Welcome {user.userName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default Welcome
