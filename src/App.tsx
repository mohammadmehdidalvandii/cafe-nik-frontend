import React, { lazy, Suspense } from 'react'
import { QueryProvider } from '@providers/QueryProvider'
import { ToasterProvider } from '@providers/ToasterProvider'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { MainLayout } from '@layouts/MainLayout'
import AdminLayout from '@layouts/AdminLayout'
// main
const Home = lazy(()=>import('@pages/Home/Home'));
const Menu = lazy(()=>import('@pages/Menu/Menu'));
const Branches = lazy(()=>import('@pages/Branches/Branches'));
const Cart = lazy(()=>import('@pages/Cart/Cart'));
// auth
const Register = lazy(()=>import('@pages/Auth/Register/Register'));
const Login = lazy(()=>import('@pages/Auth/Login/Login'));
// admin
const Admin = lazy(()=>import('@pages/Admin/Admin'));
const AdminOrders = lazy(()=>import('@pages/Admin/Orders/Orders'));

const App:React.FC = ()=>{
  return (
    <QueryProvider>
      <BrowserRouter>
      <ToasterProvider/>
        <Suspense fallback={<h1>لطفا منتظر باشید</h1>}>
          <Routes>
            {/* Login-Register */}
            <Route path='/Auth/Login' element={<Login/>}/>
            <Route path='/Auth/Register' element={<Register/>}/>
            {/* Main page */}
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='Menu' element={<Menu/>}/>
              <Route path='Branches' element={<Branches/>}/>
              <Route path='Cart' element={<Cart/>}/>
            </Route>
            {/* Admin */}
            <Route path='/Admin' element={<AdminLayout/>}>
              <Route index element={<Admin/>}/>
              <Route path='Orders' element={<AdminOrders/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App