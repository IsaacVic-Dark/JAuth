import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../services/authService'

function Welcome() {

  const Navigate = useNavigate

  const handleLogout = async () => {
    try {
      await logout
      Navigate('/')
    } catch (error) {
      throw new error('Something went wrong')
    }
  }

  return (
    <>
        <h1>Welcome to my React App</h1>
        <Link to={"/"} onClick={handleLogout}>Logout</Link>
    </>
  )
}

export default Welcome