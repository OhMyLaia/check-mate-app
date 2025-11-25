import './App.css'
import Navbar from './layout/Navbar'
import AppRoutes from './routes/AppRoutes'
import React from 'react'
import { HouseholdProvider } from './context/HouseholdContext'

function App() {

  return (
    <>
      <HouseholdProvider>
        {/* <Navbar /> */}
        <AppRoutes />
      </HouseholdProvider>
    </>
  )
}

export default App
