import { Badge } from "@components/UI/Badge";
import { Button } from "@components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import { Eye } from "lucide-react";
import React, { useState } from "react";
import { OrdersProps } from "types/orders";

interface OrderDetailsProps {
  order: OrdersProps;
}
const OrderDetailsModel: React.FC<OrderDetailsProps> = ({ order }) => {
  const [showModel, setShowModel] = useState<boolean>(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Details">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex items-center justify-end">
          <DialogTitle>جزئیات سفارش : ORD-1765180716365</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-xl font-black text-muted-foreground">مشتری</p>
              <p className="font-bold font-sansBold text-lg">
                {order.user.username}
              </p>
              <p className="text-sm" dir="ltr">
                {order.user.phone}
              </p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-xl font-black text-muted-foreground">شعبه</p>
              <p className="font-bold font-sansBold text-lg">
                {order.branch.name}
              </p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-xl font-black text-muted-foreground">
                تاریخ تحویل
              </p>
              <p className="font-bold font-sansBold text-lg">
                {order.delivery_date}/
              </p>
              <p className="text-sm">{order.delivery_time}</p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-xl font-black text-muted-foreground">
                تاریخ ثبت
              </p>
              <p className="font-bold font-sansBold text-lg">
                {new Date(order.createdAt).toLocaleString("fa-IR")}
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border">
            <div className="border-b border-border bg-secondary/50 px-4 py-2">
              <h4 className="font-sansBold font-bold">آیتم های سفارش</h4>
            </div>
            {order.order_items.map((od) => (
              <div className="divide-y divide-border" key={od.id}>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-bold block">{od.menu.name}</p>
                    <Badge variant="secondary" className="mt-1">
                      {od.size ? od.size : "-"}
                    </Badge>
                    <p className="mt-1 text-sm text-muted-foreground">
                      یاداداشت : خالی خالی خالی{" "}
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold font-sansBold">
                      عدد : {od.quantity.toLocaleString("fa-IR")}
                    </p>
                    <p className="text-lg text-copper">
                      {od.unit_price.toLocaleString("fa-IR")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-lg bg-primary/10 p-4">
            <span className="font-bold font-sansBold">جمع کل :</span>
            <span className="text-xl font-black font-sansBlack text-copper">
              {order.order_items
                .reduce((sum, item) => sum + item.quantity * item.unit_price, 0)
                .toLocaleString("fa-IR")}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModel;
