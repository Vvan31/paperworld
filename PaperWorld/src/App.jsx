import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//components
import Navbar from './components/navBar'
import Home from './components/home'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
