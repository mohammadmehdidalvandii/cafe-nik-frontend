import CustomerSettingBranch from '@components/templates/customerPanel/CustomerSettingBranch/CustomerSettingBranch'
import CustomerSettingInfo from '@components/templates/customerPanel/CustomerSettingInfo/CustomerSettingInfo'
import CustomerSettingNotification from '@components/templates/customerPanel/CustomerSettingNotification/CustomerSettingNotification'
import CustomerSettingSecurity from '@components/templates/customerPanel/CustomerSettingSecurity/CustomerSettingSecurity'
import { useAuthStore } from '@store/authStore'
import React from 'react'

const Settings:React.FC = ()=>{
  const user = useAuthStore((state)=>state.user);
  return (
    <>
    {user && user?.is_guest === true && (
      <CustomerSettingInfo/>
    )}
   
    <CustomerSettingNotification/>
    <CustomerSettingSecurity/>
    <CustomerSettingBranch/>
    </>
  )
}

export default Settings