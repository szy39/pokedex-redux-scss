import React, { useEffect } from 'react'
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
import { ToastContainer , ToastOptions , toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useAppDispatch, useAppSelector } from './app/hooks'
import { clearToasts, setUserStatus } from './app/slices/AppSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from './utils/FirebaseConfig'

function App() {

const {toasts} = useAppSelector(({app})=>app)
const dispatch = useAppDispatch()

useEffect(() => {
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser){
      dispatch(setUserStatus({email:currentUser.email}))
    }
  })
}, [dispatch])

useEffect(() => {
  if(toasts.length){
    const toastOptions:ToastOptions={
      position:"bottom-right",
      autoClose:2000,
      pauseOnHover:true,
      draggable:true,
      theme:"dark",
    }
    toasts.forEach((message:string)=>{
      toast(message,toastOptions);
    });
    dispatch(clearToasts())
  }
}, [toasts,dispatch])


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
          <ToastContainer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
