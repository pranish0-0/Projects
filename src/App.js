import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Calculator from './Components/Calculator'
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import Rpc from './Components/Rpc';
import NoteApp from './Components/NoteApp'
import Stopwatch from './Components/Stopwatch';
import Duckyou from './Components/Duckyou'

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/projects' element={ <Home /> }/>
        <Route path='/calc' element={ <Calculator /> }/>
        <Route path='/rpc' element={ <Rpc /> }/>
        <Route path='/note' element={ <NoteApp /> }/>
        <Route path='/stopwatch' element={ <Stopwatch /> }/>
      </Routes>
    </Router>
    </>
  )
}
