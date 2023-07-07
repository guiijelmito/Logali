import { useState } from 'react'
import './App.css'
import Feed from './Components/Feed'
import LoginUser from './Components/LoginUser'
import { BrowserRouter as Router } from 'react-router-dom';

import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

      <Outlet />
      </>
  )
}

export default App
