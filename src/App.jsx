import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './Component/Topbar/topbar'
import CarsShow from './Pages/CarsShow/CarsShow'
import Rental from './Pages/CarsShow/Rental/page'

function App() {

  return (
    <>
      <div className='justify-center'>
        {/* <div className='text-center text-3xl font-bold underline'>This Is Profile Page SHOWCASE</div> */}
        <Topbar/>
        <CarsShow/>
        <Rental/>
      </div>
    </>
  )
}

export default App
