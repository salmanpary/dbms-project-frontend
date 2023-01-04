import React from 'react'
import Header from '../components/Header'
import Register from '../components/Register'
const signup = () => {
  return (
    <div>
      <Header propAuth={true}/>
      <Register/>
    </div>
  )
}

export default signup