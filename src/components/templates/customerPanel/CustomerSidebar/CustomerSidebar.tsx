import { useLogoutMutation } from '@services/auth';
import { useAuthStore } from '@store/authStore';
import { cn } from '@utils/cn';
import { CreditCard, LayoutDashboard, LogOut, Settings, ShoppingBag } from 'lucide-react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const menuItems = [
    {link:"/Customer" , label:"پیشخوان", icon:LayoutDashboard},
    {link:"/Customer/Orders" , label:"سفارشات من", icon:ShoppingBag},
    {link:"/Customer/Cost" , label:"هزنیه ها", icon:CreditCard},
    {link:"/Customer/Settings" , label:"تنظیمات", icon:Settings},
]


const CustomerSidebar:React.FC = ()=>{
        const {user} = useAuthStore();
    const logout = useLogoutMutation();
    const navigate  = useNavigate();


    
    const handleLogout = ()=>{
       Swal.fire({
          icon:"warning",
          title:`آیا ${user?.username} از خروج خود اطمینان دارید ؟`,
          color:"#262626",
          confirmButtonText:"بله",
          confirmButtonColor:"#a3491f",
          showCancelButton:true,
          cancelButtonText:"نه",
          cancelButtonColor:"red"
        }).then((result)=>{
          if(result.isConfirmed){
            logout.mutate();
            navigate('/' , {replace:true})
          }
        })
    }
  return (
    <aside className='fixed right-0 top-0 h-screen w-64 flex flex-col border-l border-border bg-white'>
        <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-primary">پنل کاربری</h2>
            <p className="text-sm text-muted-foreground mt-1">مدیریت سفارشات </p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
                {menuItems.map((item)=>(
                    <li key={item.link}>
                        <NavLink 
                            to={item.link}
                            end={item.link === '/Customer'}
                            className={({isActive})=>(cn(
                                'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-right transition-all cursor-pointer font-sansBold font-semibold text-lg',
                                isActive
                                ?"bg-primary text-primary-foreground"
                                :"text-muted-foreground hover:bg-secondary"
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
            <button className="flex items-center w-full gap-3 rounded-lg px-4 py-4 text-right text-danger transition-all hover:bg-danger/10 font-black font-sansBold text-2xl cursor-pointer"  
                onClick={handleLogout}
            >
                <LogOut className='h-5 w-5'/>
                <span>خروج</span>
            </button>
        </div>
    </aside>
  )
}

export default CustomerSidebar