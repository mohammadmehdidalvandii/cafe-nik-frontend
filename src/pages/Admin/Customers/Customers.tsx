import CustomersState from '@components/templates/admin/CustomersState/CustomersState'
import CustomersTable from '@components/templates/admin/CustomersTable/CustomersTable'
import React from 'react'

const Customers:React.FC = ()=>{
  return ( 
    <>
    <CustomersState/>
    <CustomersTable/>
    </>
  )
}

export default Customers