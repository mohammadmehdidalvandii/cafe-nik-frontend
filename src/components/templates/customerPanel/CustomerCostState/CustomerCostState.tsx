import { useGetOrderUser } from '@services/orders.services'
import { isLast7Days, isThisMonth } from '@utils/HelperDate'
import { Calendar, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react'
import React from 'react'
import { OrdersProps } from 'types/orders'

interface CostDataType {
  weekly: { total: number; count: number }
  monthly: { total: number; count: number }
  total: { total: number; count: number }
}

const CustomerCostState: React.FC = () => {
  const { data: Orders } = useGetOrderUser()
  const orders: OrdersProps[] = Orders ?? []

  const costData: CostDataType = orders.reduce(
    (acc:any, order:any) => {
      const price = order.total_price || 0
      const date = new Date(order?.createdAt)


      if (isLast7Days(date)) {
        acc.weekly.total += price
        acc.weekly.count += 1
      }

      if (isThisMonth(date)) {
        acc.monthly.total += price
        acc.monthly.count += 1
      }

      acc.total.total += price
      acc.total.count += 1

      return acc
    },
    {
      weekly: { total: 0, count: 0 },
      monthly: { total: 0, count: 0 },
      total: { total: 0, count: 0 },
    }
  )

  const totalAverage =
    costData.total.count > 0
      ? costData.total.total / costData.total.count
      : 0

  const stats = [
    {
      label: 'هزینه هفته',
      value: costData.weekly.total,
      count: costData.weekly.count,
      icon: Calendar,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600',
    },
    {
      label: 'هزینه ماه',
      value: costData.monthly.total,
      count: costData.monthly.count,
      icon: TrendingUp,
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
    },
    {
      label: 'میانگین سفارش',
      value: totalAverage,
      count: costData.total.count,
      icon: DollarSign,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600',
    },
    {
      label: 'مجموع کل',
      value: costData.total.total,
      count: costData.total.count,
      icon: ShoppingBag,
      bgColor: 'bg-copper/10',
      textColor: 'text-copper',
      iconColor: 'text-copper',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl p-6 shadow-md ${stat.bgColor}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xl font-bold ${stat.textColor}`}>
                {stat.label}
              </span>
              <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>

            <p className={`text-lg font-bold ${stat.textColor}`}>
              {stat.value.toLocaleString('fa-IR')} تومان
            </p>

            <p className={`text-sm mt-1 ${stat.textColor}`}>
              {stat.count.toLocaleString('fa-IR')} سفارش
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerCostState
