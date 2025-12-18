import SettingNotifications from '@components/templates/admin/SettingNotifications/SettingNotifications'
import SettingProfile from '@components/templates/admin/SettingProfile/SettingProfile'
import SettingSecurity from '@components/templates/admin/SettingSecurity/SettingSecurity'
import React from 'react'

const Settings:React.FC = ()=>{
  return (
    <div>
        <SettingProfile/>
        <div className="grid gap-6 lg:grid-cols-2 mt-8">
            <SettingNotifications/>
            <SettingSecurity/>
        </div>
    </div>
  )
}

export default Settings