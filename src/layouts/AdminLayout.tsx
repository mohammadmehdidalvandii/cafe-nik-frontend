import AdminSidebar from '@components/templates/admin/AdminSidebar/AdminSidebar'
import { Button } from '@components/UI/Button';
import { Sheet, SheetContent, SheetTrigger } from '@components/UI/Sheet';
import { adminPageMeta } from '@pages/Admin/adminPageMeta';
import { Menu } from 'lucide-react';
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const AdminLayout:React.FC = ()=>{
  const [mobileMenu , setMobileMenu] = useState(false)
  const {pathname} = useLocation();

  const pageMeta = adminPageMeta[pathname];

  return (
    <div className='min-h-screen'>
      {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar 
          />
        </div>
      {/* Mobile Header */}
        <header className='fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-border bg-white px-4 lg:hidden'>
          <h1 className="text-lg font-black font-sansBlack">پنل مدیریت</h1>
          <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' aria-label='Menu admin'>
                <Menu className='h-6 w-6'/>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-64 p-0'>
              <AdminSidebar/>
            </SheetContent>
          </Sheet>
        </header>
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