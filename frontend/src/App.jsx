import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Welcome from '../Pages/Welcome'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Todo from '../Pages/Todo'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/api/signup' element={<SignUp/>}></Route>
        <Route path='/api/signin' element={<SignIn/>}></Route>
        <Route path='/api/todo' element={<Todo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App