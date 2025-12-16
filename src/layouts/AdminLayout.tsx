import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout:React.FC = ()=>{
  return (
    <div className='min-h-screen'>
        {/* Main Content */}
        <main className='min-h-screen pt-16'>
            <div className="p-6">
                <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default AdminLayout