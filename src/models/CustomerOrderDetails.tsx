import { Badge } from '@components/UI/Badge';
import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { showInfo } from '@utils/Toasts';
import { Copy, Eye } from 'lucide-react';
import React, { useState } from 'react';
import { OrdersProps } from 'types/orders';

interface DetailsOrderProps{
    order:OrdersProps
}

const CustomerOrderDetails:React.FC<DetailsOrderProps> = ({order})=>{
    const [showModel , setShowModel] = useState<boolean>(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild>
            <Button variant='ghost' size='sm' aria-label='details order'>
                <Eye className='h-4 w-4'/>
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-lg'>
            <DialogHeader>
                <DialogTitle>جزئیات سفارش ORD-1766228790198</DialogTitle>
            </DialogHeader>
            <div className="my-2">
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <span className="text-muted-foreground">شعبه</span>
                        <p className="font-medium">{order.branch.name}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">وضعیت</span>
                        <p className="font-medium">
                            <Badge variant='secondary'>
                                {order.status}
                            </Badge>
                        </p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">تاریخ ثبت :</span>
                        <p className="font-medium">{new Date(order.createdAt).toLocaleString('fa-IR')}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">زمان تحویل</span>
                        <p className="font-medium">{order.delivery_date} - {order.delivery_time}</p>
                    </div>
                </div>
            </div>
            {/* pickUpCode */}
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground mb-1">کد تحویل</p>
                <p className="text-2xl font-bold text-primary tracking-[0.3rem]">
                    {order.pickup_code}
                </p>
                <Button variant='ghost'
                    size='sm'
                    className='mt-2'
                    onClick={()=>{
                        navigator.clipboard.writeText(order.pickup_code)
                        showInfo('کد تحویل کپی شد')
                    }}
                >
                    <Copy className='h-4 w-4 ml-2'/>
                    کپی کد
                </Button>
            </div>

            <div className="border-t border-border p-4 ">
                <h4 className="font-bold mb-2">آیتم های سفارش</h4>
                <div className="my-2">
                    {order.order_items.map((od)=>(
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3" key={od.id}>
                        <div>
                            <span className="font-medium">{od.menu.name}</span>
                            {od.size === null ? null : (
                                <Badge variant='secondary'>{od.size === 'medium' ? 'متوسط':od.size === 'larger'?'بزرگ':od.size === 'small' ? 'کوچیک':''}</Badge>
                            )}
                            <span className='text-muted-foreground mr-2'>x {od.quantity.toLocaleString('fa-IR')}</span>
                        </div>
                        <span className="font-bold">
                            {(od.unit_price * od.quantity).toLocaleString('fa-IR')} تومان
                        </span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="font-bold">مجموع :</span>
                <span className="text-xl font-bold text-copper">
                    {order.total_price.toLocaleString('fa-IR')} تومان 
                </span>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CustomerOrderDetails