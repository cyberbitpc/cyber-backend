import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')

  return (
    <div>
      <h1>Ho2me</h1>
    </div>
  )
}

export default HomePage
