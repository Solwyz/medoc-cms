import React from 'react'
import Sidebar from './Sections/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Sections/Header/Header'

function CmsLayout() {
  return (
    <div>
    <Header/>
  <div className='flex'>
      <Sidebar/>
      <div className='ml-[242px] bg-[#EFEFF5] h-screen w-full mt-[72px] px-6 py-4'>  <Outlet /></div>
      </div>
    </div>
  )
}

export default CmsLayout
