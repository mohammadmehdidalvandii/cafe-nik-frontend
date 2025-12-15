import BranchHeader from '@components/templates/Branches/BranchHeader/BranchHeader'
import BranchItems from '@components/templates/Branches/BranchItems/BranchItems'
import React from 'react'

const Branches:React.FC = ()=>{
  return (
   <>
   <BranchHeader/>
   <BranchItems/>
   </>
  )
}

export default Branches