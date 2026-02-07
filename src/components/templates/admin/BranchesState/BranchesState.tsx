import { useGetAllBranches } from '@services/branch.services'
import { MapPin, ShoppingBag, TrendingUp } from 'lucide-react'
import React from 'react'

const BranchesState:React.FC = ()=>{
    const {data} = useGetAllBranches();

    const branchCount = data?.length ?? 0
    const totalRevenue = data?.reduce(
      (sum:any, branch:any) => sum + (branch.total_revenue || 0),
      0
    ) ?? 0;
    const orderCount = data?.reduce(
      (sum:any, branch:any) => sum + (branch.order_count || 0),
      0
    ) ?? 0;

    const averageRevenue =
        branchCount > 0
        ? Math.floor(totalRevenue / branchCount)
    : 0

  return (
    <section className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">تعداد شعب</p>
                        <p className="text-2xl font-bold">{branchCount.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <TrendingUp className='h-6 w-6 text-green-600'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">درامد کل(تومان)</p>
                        <p className="text-2xl font-bold">{totalRevenue.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <ShoppingBag className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">کل سفارش ها</p>
                        <p className="text-2xl font-bold">{orderCount.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10">
                        <TrendingUp className='h-6 w-6 text-copper'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">میانگین درآمد</p>
                        <p className="text-2xl font-bold">{averageRevenue.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BranchesState