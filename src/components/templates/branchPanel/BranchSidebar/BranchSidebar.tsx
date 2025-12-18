import { cn } from '@utils/cn'
import { LayoutDashboard, LogOut, Settings, ShoppingCart, TrendingUp } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const menuItems = [
    {link:"/Branch" , label:"پیشخوان", icon:LayoutDashboard},
    {link:"/Branch/Orders" , label:"سفارشات", icon:ShoppingCart},
    {link:"/Branch/Income" , label:"درآمد شعبه", icon:TrendingUp},
    {link:"/Branch/Settings" , label:"تنظیمات", icon:Settings},
]

const BranchSidebar:React.FC =()=>{
  return (
    <aside className='fixed right-0 top-0 h-screen w-64 flex flex-col border-l border-border bg-white'>
        <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-primary">پنل مدیر شعبه</h2>
            <p className="text-lg text-muted-foreground mt-1">مدیریت شعبه</p>
        </div>
        <nav className='flex-1 overflow-y-auto p-4'>
            <ul className="space-y-2">
                {menuItems.map((item)=>(
                    <li key={item.link}>
                        <NavLink 
                            to={item.link}
                            end={item.link === '/Branch'}
                            className={({isActive})=>(cn(
                                'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-right transition-all cursor-pointer font-sansBold font-semibold text-lg',
                                isActive
                                ?'bg-primary text-primary-foreground'
                                :'text-muted-foreground hover:bg-secondary'
                            ))}
                        >
                            <item.icon className='h-5 w-5'/>
                            <span className="flex-1">{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="border-t border-border p-4">
            <button className="flex w-full gap-3 rounded-lg px-4 py-4 text-right text-danger transition-all hover:bg-danger/10 font-black font-sansBold text-2xl cursor-pointer">
                <LogOut className='h-5 w-5'/>
                <span>خروج</span>
            </button>
        </div>
    </aside>
  )
}

export default BranchSidebar