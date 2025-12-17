import AdminState from '@components/templates/admin/AdminState/AdminState'
import OrdersTable from '@components/templates/admin/OrdersTable'
import React from 'react'

const Admin:React.FC = ()=>{
  return (
    <>
    <AdminState/>
    <OrdersTable/>
    </>
  )
}

export default Admin