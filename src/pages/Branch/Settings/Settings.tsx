import BranchSettingInfo from '@components/templates/branchPanel/BranchSettingInfo/BranchSettingInfo'
import BranchSettingMangerInfo from '@components/templates/branchPanel/BranchSettingMangerInfo/BranchSettingMangerInfo'
import BranchSettingsWorking from '@components/templates/branchPanel/BranchSettingsWorking/BranchSettingsWorking'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <>
    <BranchSettingInfo/>
    <BranchSettingMangerInfo/>
    <BranchSettingsWorking/>
    </>
  )
}

export default Settings