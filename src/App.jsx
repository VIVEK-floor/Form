import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import './App.css'


import Sign from './Sign'
import Login from './Login'
import Home from './Home'
import Vivek from './Vivek'

function App() {


  return (
<>
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/vivek" element={<Vivek/>} />
          <Route path="/sign" element={<Sign/>} />
      </Routes>
  

  </BrowserRouter>
    </>
  )
}

export default App
