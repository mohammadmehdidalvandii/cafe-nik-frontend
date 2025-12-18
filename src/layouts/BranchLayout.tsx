import BranchSidebar from '@components/templates/branchPanel/BranchSidebar/BranchSidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const BranchLayout:React.FC = ()=>{
  return (
    <div className="min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
            <BranchSidebar/>
        </div>
        {/* Mobile Header */}
        <header className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-border bg-white px-4 lg:hidden"></header>
        {/* Main Content */}
        <div className="min-h-screen pt-16 lg:mr-64 lg:pt-0">
            <div className="p-4 lg:p-8">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default BranchLayout