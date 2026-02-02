import BranchSidebar from '@components/templates/branchPanel/BranchSidebar/BranchSidebar'
import { Button } from '@components/UI/Button'
import { Sheet, SheetContent, SheetTrigger } from '@components/UI/Sheet'
import { branchPageMeta } from '@pages/Branch/branchPageMeta'
import { useAuthStore } from '@store/authStore'
import { showError } from '@utils/Toasts'
import { Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const BranchLayout:React.FC = ()=>{
    const {token , user} = useAuthStore();
  const navigate = useNavigate()
  const [mobileMenu , setMobileMenu] = useState(false);
  const {pathname} = useLocation();

  const pageMeta = branchPageMeta[pathname];

    useEffect(()=>{
      if(!token || user?.roles !== 'مدیر شعبه'){
        showError('شما اجازه دسترسی به این صفحه ندارید اول وارد شوید');
        navigate('/')
      }
    },[])

  return (
    <div className="min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
            <BranchSidebar/>
        </div>
        {/* Mobile Header */}
        <header className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-border bg-white px-4 lg:hidden">
          <h1 className='text-lg font-black font-sansBlack'>پنل شعبه</h1>
          <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' aria-label='Menu branch'>
                <Menu className='h-6 w-6'/>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-64 p-0'>
              <BranchSidebar/>
            </SheetContent>
          </Sheet>
        </header>
        {/* Main Content */}
        <div className="min-h-screen pt-16 lg:mr-64 lg:pt-0">
            <div className="p-4 lg:p-6">
            <div>
              <h1 className="text-2xl font-black font-sansBlack">{pageMeta.title}</h1>
              <p className="text-muted-foreground">{pageMeta.description}</p>
            </div>
            </div>
            <div className="p-4 lg:p-8">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default BranchLayout