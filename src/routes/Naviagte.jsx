import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blogs from '../pages/Blogs'
import Layouts from '../components/layout/Layouts'

function Naviagte() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='About'  element={<About/>} />
            <Route path='Blog'  element={<Blogs/>} />
            <Route path='Contact'  element={<Contact/>} />
            <Route path='*'  element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default Naviagte