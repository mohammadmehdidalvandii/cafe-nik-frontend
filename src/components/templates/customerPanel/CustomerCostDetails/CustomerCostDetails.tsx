import React from 'react'

const CustomerCostDetails:React.FC = ()=>{
  return (
    <section className="space-y-4 mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold mb-4">خلاصه هزنیه ها براساس ماه</h3>
                {/* Not orders */}
                {/* <p className="text-muted-foreground text-center py-8">هنوز سفارش تکمیل شده ای وجود نداره</p>             */}

                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                        <div>
                            <span className="font-medium">مهر</span>
                            <p className="text-sm text-muted-foreground">
                                {(12).toLocaleString('fa-IR')}
                            </p>
                        </div>
                        <span className="font-bold text-copper">
                            {(789000).toLocaleString('fa-IR')} تومان
                        </span>
                    </div>
                </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4">آخرین خرید ها</h3>
            {/* not buy */}
            {/* <p className="text-muted-foreground text-center py-8">
                هنوز خریدی انجام نشده
            </p> */}

            <div className="space-y-4">
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                    <div>
                    <span className="font-medium">سفارش : ORD-1766228790198</span>
                    <p className="text-sm text-muted-foreground">
                        شعبه ونک - {new Date().toLocaleString('fa-IR')}
                    </p>
                    </div>
                    <span className="font-bold text-copper">
                        {(789000).toLocaleString('fa-IR')} تومان
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerCostDetails