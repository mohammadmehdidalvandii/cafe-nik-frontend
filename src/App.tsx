import React, { lazy, Suspense } from 'react';
import { QueryProvider } from '@providers/QueryProvider';
import { ToasterProvider } from '@providers/ToasterProvider';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { MainLayout } from '@layouts/MainLayout';
import AdminLayout from '@layouts/AdminLayout';
import BranchLayout from '@layouts/BranchLayout';
import CustomerLayout from '@layouts/CustomerLayout';
// main
const Home = lazy(()=>import('@pages/Home/Home'));
const Menu = lazy(()=>import('@pages/Menu/Menu'));
const Branches = lazy(()=>import('@pages/Branches/Branches'));
const Cart = lazy(()=>import('@pages/Cart/Cart'));
// auth
const Register = lazy(()=>import('@pages/Auth/Register/Register'));
const Login = lazy(()=>import('@pages/Auth/Login/Login'));
// Not found
const NotFound = lazy(()=>import('@pages/NotFound/NotFound'));
// admin
const Admin = lazy(()=>import('@pages/Admin/Admin'));
const AdminOrders = lazy(()=>import('@pages/Admin/Orders/Orders'));
const AdminCustomers = lazy(()=>import('@pages/Admin/Customers/Customers'));
const AdminBranches = lazy(()=>import('@pages/Admin/Branches/Branches'));
const AdminMenu = lazy(()=>import('@pages/Admin/Menu/Menu'));
const AdminSettings = lazy(()=>import('@pages/Admin/Settings/Settings'));
// Branch panel
const Branch = lazy(()=>import('@pages/Branch/Branch'));
const BranchOrders = lazy(()=>import('@pages/Branch/Orders/Orders'));
const BranchIncome = lazy(()=>import('@pages/Branch/Income/Income'));
const BranchSettings = lazy(()=>import('@pages/Branch/Settings/Settings'));
// Customer panel 
const Customer = lazy(()=>import('@pages/Customer/Customer'));
const CustomerOrders = lazy(()=>import('@pages/Customer/Orders/Orders'));
const CustomerCost = lazy(()=>import('@pages/Customer/Cost/Cost'));

const App:React.FC = ()=>{
  return (
    <QueryProvider>
      <BrowserRouter>
      <ToasterProvider/>
        <Suspense fallback={<h1>لطفا منتظر باشید</h1>}>
          <Routes>
            {/* Public pages */}
            <Route path='/*' element={<NotFound/>}/>
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
              <Route path='Customers' element={<AdminCustomers/>}/>
              <Route path='Branches' element={<AdminBranches/>}/>
              <Route path='Menu' element={<AdminMenu/>}/>
              <Route path='Settings' element={<AdminSettings/>}/>
            </Route>
            {/* Branch */}
            <Route path='/Branch' element={<BranchLayout/>}>
              <Route index element={<Branch/>}/>
              <Route path='Orders' element={<BranchOrders/>}/>
              <Route path='Income' element={<BranchIncome/>}/>
              <Route path='Settings' element={<BranchSettings/>}/>
            </Route>
            {/* Customer */}
            <Route path='/Customer' element={<CustomerLayout/>}>
              <Route index element={<Customer/>}/>
              <Route path='Orders' element={<CustomerOrders/>}/>
              <Route path='Cost' element={<CustomerCost/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryProvider>
  )
}

export default App