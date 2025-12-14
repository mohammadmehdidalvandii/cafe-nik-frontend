import Footer from '@components/modules/Footer/Footer'
import Navigation from '@components/modules/Navigation/Navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout:React.FC = ()=>{
  return (
    <div className="min-h-screen">
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
