// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav'
import { useState } from 'react'
import { useEffect } from 'react'



function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    console.log(favorites)
  }, [favorites])

  return (
    <>
      <NavBar favorites={favorites}/>
      <Outlet context={{favorites, setFavorites}}/>
    </>
  )
}

export default App
