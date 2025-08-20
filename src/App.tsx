import React from 'react'
import Wrapper from './sections/Wrapper'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Background from './components/Background'
import "./scss/index.scss"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Search from './pages/Search'
import Compare from './pages/Compare'
import Pokemon from './pages/Pokemon'
import MyList from './pages/MyList'

function App() {
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<MyList />} />
            <Route path="/about" element={<About />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<Navigate to="/pokemon/1" />} />
          </Routes>
         
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
