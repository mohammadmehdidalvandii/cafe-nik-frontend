import React from 'react'

const SettingProfile:React.FC = ()=>{
  return (
    <section className="space-y-4">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-muted">
                    م
                </div>
                <div>
                    <h3 className="text-xl font-bold">مدیر کل</h3>
                    <p className="text-muted-foreground">09123336655</p>
                    <p className="text-sm text-copper">مدیرکل</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SettingProfile