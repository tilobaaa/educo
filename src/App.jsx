import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import NavBar from './components/NavBar'
import SignUp from './pages/signUp'
import Login from './pages/Login'

function App() {
  
  return (
    <BrowserRouter>
    <div className='flex flex-col h-screen'>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </div>
    </BrowserRouter> )
}

export default App
