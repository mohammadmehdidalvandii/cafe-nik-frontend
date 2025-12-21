import CustomerCostDetails from '@components/templates/customerPanel/CustomerCostDetails/CustomerCostDetails'
import CustomerCostState from '@components/templates/customerPanel/CustomerCostState/CustomerCostState'
import React from 'react'

const Cost:React.FC = ()=>{
  return (
    <>
    <CustomerCostState/>
    <CustomerCostDetails/>
    </>
  )
}

export default Cost