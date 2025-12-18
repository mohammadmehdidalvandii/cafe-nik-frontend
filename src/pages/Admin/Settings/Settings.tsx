import SettingNotifications from '@components/templates/admin/SettingNotifications/SettingNotifications'
import SettingProfile from '@components/templates/admin/SettingProfile/SettingProfile'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <div>
        <SettingProfile/>
        <div className="grid gap-6 lg:grid-cols-2 mt-8">
            <SettingNotifications/>
        </div>
    </div>
  )
}

export default Settings