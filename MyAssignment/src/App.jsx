import React from 'react'
import Loginpage from './Assignment/Loginpage'
import Logout from './Assignment/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoApp from './Assignment/TodoApp'

export default function App() {
  return (
    <div>

      <TodoApp/>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logout/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
      </Routes>
      </BrowserRouter> */}
    
    </div>
  )
}
