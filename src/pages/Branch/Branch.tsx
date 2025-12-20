import BranchOrdersTable from '@components/templates/branchPanel/BranchOrdersTable/BranchOrdersTable'
import BranchState from '@components/templates/branchPanel/BranchState/BranchState'
import React from 'react'

const Branch:React.FC =()=>{
  return (
    <>
    <BranchState/>
    <BranchOrdersTable/>
    </>
  )
}

export default Branch