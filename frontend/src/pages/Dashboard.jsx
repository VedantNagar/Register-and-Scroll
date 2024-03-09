import React from 'react'
import { useContext } from 'react'
import { userContext } from '../context/userContext'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logOut, isLogin } = useContext(userContext)
  console.log(user)
  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    }
  }, [isLogin])
  const handleLogOut = () => {
    logOut()
  }
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && (<h2>Hi {user.name}!</h2>)}
      <button onClick={handleLogOut}>log out</button>
    </div>
  )
}

export default Dashboard