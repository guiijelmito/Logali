import { useState } from 'react'
import './App.css'
import Feed from './Components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Feed />
  )
}

export default App
