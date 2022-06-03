import './index.scss'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">Welcome</span>
        <Outlet /> 
        <span className='tags bottom-tags'>
        This is the way
        <br/>
        <span className='bottom-tag-html'>Mando</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
