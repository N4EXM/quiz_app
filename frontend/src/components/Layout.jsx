import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const Layout = ({ children }) => {
  return (
    <div
      className='flex flex-row gap-0 w-full h-screen bg-slate-200 dark:bg-slate-900 overflow-hidden'
    >
      <Sidebar/>
      <div
        className='flex flex-col w-full h-full '
      >
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout