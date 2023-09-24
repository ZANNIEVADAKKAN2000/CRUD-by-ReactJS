import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Create from './Components/Create'
import Users from './Components/Users'
import Edit from './Components/Edit'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <HomePage/>
      <Routes>
        <Route element={<Create/>} path='/'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<Edit/>} path='/edit-user/:id'/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App