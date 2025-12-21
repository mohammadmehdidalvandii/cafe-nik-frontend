import CustomerSettingInfo from '@components/templates/customerPanel/CustomerSettingInfo/CustomerSettingInfo'
import CustomerSettingNotification from '@components/templates/customerPanel/CustomerSettingNotification/CustomerSettingNotification'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <>
    <CustomerSettingInfo/>
    <CustomerSettingNotification/>
    </>
  )
}

export default Settings