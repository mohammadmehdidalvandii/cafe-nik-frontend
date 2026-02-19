import { useAuthStore } from '@store/authStore'
import React from 'react'

const SettingProfile:React.FC = ()=>{
    const user = useAuthStore((state)=>state.user)
  return (
    <section className="space-y-4">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-muted">
                    م
                </div>
                <div>
                    <h3 className="text-xl font-bold">{user?.username}</h3>
                    <p className="text-muted-foreground">{user?.phone}</p>
                    <p className="text-sm text-copper">{user?.roles}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SettingProfile