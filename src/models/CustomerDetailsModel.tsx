import { Badge } from '@components/UI/Badge';
import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog'
import { Calendar, Eye, MapPin, Phone, User } from 'lucide-react';
import React, { useState } from 'react'
import { CustomerProps } from 'types/customer';

interface CustomerDetailProps {
    customer:CustomerProps
}

const CustomerDetailsModel:React.FC<CustomerDetailProps> = ({customer})=>{
    
    const [showModel , setShowModel] = useState<boolean>(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel} >
        <DialogTrigger asChild>
            <Button 
                variant='ghost'
                size='sm'
            >
                <Eye className='h-4 w-4 ml-1'/>
                جزئیات
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-2xl max-h-[85vh] overflow-y-auto'>
            <DialogHeader>
                <DialogTitle className='flex items-center gap-3' >
                    <div className="flex h-12 w-12  items-center justify-center rounded-full bg-primary/10">
                        <User className='h-6 w-6 text-primary'/>
                    </div>
                    جزئیات مشتری
                </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
                {/* Customer Info */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <User className='h-4 w-4'/>
                            <span className="text-xl">نام</span>
                        </div>
                        <p className="font-bold text-lg">{customer.username}</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Phone className='h-4 w-4'/>
                            <span className="text-xl">شماره تماس</span>
                        </div>
                        <p className="font-bold text-lg" dir='ltr'>{customer.phone}</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <User className='h-4 w-4'/>
                            <span className="text-xl">تعداد سفارش</span>
                        </div>
                        <p className="font-bold text-lg">{(customer.order?.length || 0).toLocaleString("fa-IR")}</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <User className='h-4 w-4'/>
                            <span className="text-xl">مجموع خرید</span>
                        </div>
                        <p className="font-bold text-lg text-copper">{(customer.order).reduce((sum: number, o) => sum + o.total_price, 0).toLocaleString('fa-IR')} تومان</p>
                    </div>
                </div>
                {/* Order History */}
                <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                        <Calendar className='h-5 w-5 text-primary'/>
                        تاریخچه سفارش ها
                    </h3>
            {customer.order?.map((od) => (
              <div className="space-y-3 max-h-[300px] overflow-y-auto mb-2" key={od.id}>
                <div className="rounded-xl border border-border bg-secondary/30 p-4">

                  {/* هدر سفارش */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className='bg-green-200 text-green-900'>{od.status}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(od.createdAt).toLocaleDateString('fa-IR')}
                      </span>
                    </div>
                    <span className="font-bold text-copper">
                      {od.total_price.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>

                  {/* Branch */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className='h-4 w-4' />
                    شعبه: {od.branch.name}
                  </div>

                  {/* items  orders*/}
                  <div className="space-y-1 border-t border-border pt-2">
                    {od.order_items.map((item:any) => (
                      <div className="flex justify-between text-sm text-muted-foreground" key={item.id}>
                        <span>
                          {item.menu.name} {item.size ? `(${item.size})` : ''} × {item.quantity}
                        </span>
                        <span>{(item.unit_price * item.quantity).toLocaleString('fa-IR')} تومان</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CustomerDetailsModel