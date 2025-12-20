import React from 'react'

const BranchTableIncome:React.FC = ()=>{
  return (
    <section className="rounded-xl bg-white p-6 shadow-md mt-8">
        <h3 className="text-lg font-bold mb-4">آخرین سفارشات تکمیل شده</h3>
        {/* Empty orders completed */}
        <p className="text-muted-foreground text-center py-8">
            هنوز سفارش تکمیل شده ای وجود نداره
        </p>

        <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
            <div>
                <span className="text-2xl font-medium">مدیرشعبه ونک</span>
                <p className="text-lg text-muted-foreground">
                    {new Date().toLocaleDateString('fa-IR')}
                </p>
            </div>
            <span className="font-bold text-xl text-copper">
                {(97500).toLocaleString('fa-IR')}
            </span>
        </div>
    </section>
  )
}

export default BranchTableIncome