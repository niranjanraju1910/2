import React from 'react'
import './styles/Global.scss'
import Main from './pages/main/Main'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Footer />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </Router>
  )

}

export default App
