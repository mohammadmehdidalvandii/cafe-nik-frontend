import BranchesState from '@components/templates/admin/BranchesState/BranchesState'
import BranchesTable from '@components/templates/admin/BranchesTable/BranchesTable'
import React from 'react'

const Branches:React.FC = ()=>{
  return (
    <>
    <BranchesState/>
    <BranchesTable/>
    </>
  )
}

export default Branches