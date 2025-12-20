import BranchSettingInfo from '@components/templates/branchPanel/BranchSettingInfo/BranchSettingInfo'
import BranchSettingMangerInfo from '@components/templates/branchPanel/BranchSettingMangerInfo/BranchSettingMangerInfo'
import BranchSettingNotification from '@components/templates/branchPanel/BranchSettingNotification/BranchSettingNotification'
import BranchSettingsWorking from '@components/templates/branchPanel/BranchSettingsWorking/BranchSettingsWorking'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <>
    <BranchSettingInfo/>
    <BranchSettingMangerInfo/>
    <BranchSettingsWorking/>
    <BranchSettingNotification/>
    </>
  )
}

export default Settings