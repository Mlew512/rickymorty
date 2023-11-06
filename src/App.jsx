// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Nav'



function App() {
  

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
