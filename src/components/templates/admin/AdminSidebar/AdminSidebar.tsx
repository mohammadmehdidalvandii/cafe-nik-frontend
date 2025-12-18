import { cn } from "@utils/cn";
import {
  Coffee,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { link: "/Admin", label: "پیشخوان", icon: LayoutDashboard },
  { link: "/Admin/Orders", label: "سفارشات", icon: ShoppingBag },
  { link: "/Admin/Customers", label: "مشتریان", icon: Users },
  { link: "/Admin/Branches", label: "شعب", icon: Store },
  { link: "/Admin/Menu", label: "منو", icon: Coffee },
  { link: "/Admin/Settings", label: "تنظیمات", icon: Settings },
];


const AdminSidebar: React.FC = () => {
  return (
    <aside className="fixed right-0 top-0 z-40 h-screen w-64 flex flex-col border-l border-border bg-white">
      <div className="flex h-16 items-center justify-center border-b border-border bg-primary">
        <h1 className="text-xl font-sansBlack font-black text-primary-foreground">
          پنل مدیریت نیک
        </h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                end={item.link === '/Admin'}
                className={({ isActive }) =>
                  cn(
                    "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-right transition-all cursor-pointer font-sansBold font-semibold text-lg",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="flex-1">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-border p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-4 text-right text-danger transition-all hover:bg-danger/10 font-black font-sansBold text-2xl cursor-pointer">
          <LogOut className="h-5 w-5" />
          <span>خروج از حساب</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
