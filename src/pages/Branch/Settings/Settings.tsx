import BranchSettingInfo from '@components/templates/branchPanel/BranchSettingInfo/BranchSettingInfo'
import BranchSettingMangerInfo from '@components/templates/branchPanel/BranchSettingMangerInfo/BranchSettingMangerInfo'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <>
    <BranchSettingInfo/>
    <BranchSettingMangerInfo/>
    </>
  )
}

export default Settings