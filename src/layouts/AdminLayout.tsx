import AdminSidebar from '@components/templates/admin/AdminSidebar/AdminSidebar'
import { adminPageMeta } from '@pages/Admin/adminPageMeta';
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const AdminLayout:React.FC = ()=>{
  const {pathname} = useLocation();

  const pageMeta = adminPageMeta[pathname];

  return (
    <div className='min-h-screen'>
      {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar 
          />
        </div>
      {/* Main Content */}
        <main className='min-h-screen pt-16 lg:mr-64 lg:pt-0'>
            <div className="p-4 lg:p-6">
              <div>
                <h1 className="text-2xl font-black font-sansBlack">{pageMeta.title}</h1>
                <p className="text-muted-foreground">{pageMeta.description}</p>
              </div>
            </div>
            <div className="p-4 lg:p-8">
              <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default AdminLayout