import AdminSidebar from '@components/templates/admin/AdminSidebar/AdminSidebar'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout:React.FC = ()=>{
  const [activeTab , setActiveTab] = useState('/Admin');

  const renderContent = ()=>{
    switch(activeTab){
      case '/Admin':
        return(
          <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold font-sansBold">پیشخوان</h1>
                <p className="text-muted-foreground">خوش آمدید</p>
              </div>
          </div>
        );
      case '/Admin/orders':
        return(
          <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold font-sansBold">سفارشات</h1>
                <p className="text-muted-foreground">خوش آمدید</p>
              </div>
          </div>
        );
      case '/Admin/Customer':
        return(
          <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold font-sansBold">مشتریان</h1>
                <p className="text-muted-foreground">خوش آمدید</p>
              </div>
          </div>
        );
      case '/Admin/Branches':
        return(
          <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold font-sansBold">شعب</h1>
                <p className="text-muted-foreground">خوش آمدید</p>
              </div>
          </div>
        );
      case '/Admin/Menu':
        return(
          <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold font-sansBold">منو</h1>
                <p className="text-muted-foreground">خوش آمدید</p>
              </div>
          </div>
        );
      case '/Admin/Settings':
        return(
          <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold font-sansBold">تنظیمات</h1>
                <p className="text-muted-foreground">خوش آمدید</p>
              </div>
          </div>
        );
        default: return null
    }
  }
  
  return (
    <div className='min-h-screen'>
      {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar 
            activeTab={activeTab}
          />
        </div>
      {/* Main Content */}
        <main className='min-h-screen pt-16 lg:mr-64 lg:pt-0'>
            <div className="p-4 lg:p-6">
              {renderContent()}
            </div>
            <div className="p-4 lg:p-8">
              <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default AdminLayout