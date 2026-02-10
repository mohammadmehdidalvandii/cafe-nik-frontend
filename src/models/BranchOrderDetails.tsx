import { Badge } from '@components/UI/Badge';
import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Eye } from 'lucide-react';
import React, { useState } from 'react';
import { BranchOrderProps } from 'types/branch';

interface OrderDetailsProps{
    order:BranchOrderProps
}

const BranchOrderDetails:React.FC<OrderDetailsProps> = ({order})=>{
    const [showModel,setShowModel] = useState<boolean>(false);


  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild >
            <Button variant='ghost' size='sm' aria-label='details'>
                <Eye className='h-4 w-4'/>
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-lg'>
            <DialogHeader className='flex items-center justify-center'>
                <DialogTitle>جزئیات سفارش   ORD-{order.id}</DialogTitle>
            </DialogHeader>
            <div className="my-4">
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <span className="text-muted-foreground">مشتری :</span>
                        <p className="font-medium">{order.user.username}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">تلفن :</span>
                        <p className="font-medium" dir='ltr'>{order.user.phone}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">تاریخ ثبت :</span>
                        <p className="font-medium">{new Date(order.createdAt).toLocaleDateString('fa-IR')}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">زمان تحویل :</span>
                        <p className="font-medium">{order.delivery_date} - {order.delivery_time}</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-border pt-4">
                <h4 className='font-bold mb-2'>آیتم های سفارش</h4>
                {order.order_items.map((item)=>(
                <div className="my-2">
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                    <div>
                        <span className="font-medium">{item.menu.name}</span>
                        {item.menu.size !== "" &&(
                        <Badge variant='secondary'>
                            {item.menu.size === 'medium'? 'متوسط':item.menu.size === 'small'? 'کوچیک':item.menu.size === 'large'? 'بزرگ':'-'}
                        </Badge>
                        )
                        }
                        <span className="text-muted-foreground mr-2">*{item.quantity}</span>
                    </div>
                    <span className="font-bold">
                        {item.unit_price.toLocaleString('fa-IR')} تومان
                    </span>
                    </div>
                </div>
                ))}
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

export default BranchOrderDetails