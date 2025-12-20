import BranchStateIncome from '@components/templates/branchPanel/BranchStateIncome/BranchStateIncome'
import BranchTableIncome from '@components/templates/branchPanel/BranchTableIncome/BranchTableIncome'
import React from 'react'

const Income:React.FC = ()=>{
  return (
    <>
    <BranchStateIncome/>
    <BranchTableIncome/>
    </>
  )
}

export default Income