import React from 'react'
import { Outlet } from 'react-router-dom'

const CustomerLayout:React.FC = ()=>{
  return (
    <div className="min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
            sidebar
        </div>
        {/* Mobile Header */}
        <header className='fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-border bg-white px-4 lg:hidden'>
            <h1 className="text-lg font-black font-sansBlack">پنل کاربری</h1>
        </header>
        {/* Main Content */}
        <div className="min-h-screen pt-16 lg:mr-64 lg:pt-0">
            <div className="p-4 lg:p-6">
                <div>
                    <h1 className="text-2xl font-black font-sansBlack"></h1>
                    <p className="text-muted-foreground"></p>
                </div>
            </div>
            <div className="p-4 lg:p-8">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default CustomerLayout