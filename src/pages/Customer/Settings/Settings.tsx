import CustomerSettingInfo from '@components/templates/customerPanel/CustomerSettingInfo/CustomerSettingInfo'
import CustomerSettingNotification from '@components/templates/customerPanel/CustomerSettingNotification/CustomerSettingNotification'
import CustomerSettingSecurity from '@components/templates/customerPanel/CustomerSettingSecurity/CustomerSettingSecurity'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <>
    <CustomerSettingInfo/>
    <CustomerSettingNotification/>
    <CustomerSettingSecurity/>
    </>
  )
}

export default Settings