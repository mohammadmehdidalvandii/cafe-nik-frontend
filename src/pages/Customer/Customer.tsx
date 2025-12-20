import CustomerOrdersTable from '@components/templates/customerPanel/CustomerOrdersTable/CustomerOrdersTable'
import CustomerState from '@components/templates/customerPanel/CustomerState/CustomerState'
import React from 'react'

const Customer:React.FC =()=>{
  return (
    <>
    <CustomerState/>
    <CustomerOrdersTable/>
    </>
  )
}

export default Customer