import React from 'react'
import Header from './Components/Header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Auth/Login/Login'
import Forget from './Auth/ForgetPassword/Forget';
import ResetPassword from './Auth/ResetPassword/ResetPassword'
// import Login from './Auth/Login/Login'

const App = () => {
  return (
    <div>
            <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>



      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App