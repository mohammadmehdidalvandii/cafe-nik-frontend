import { Button } from "@components/UI/Button";
import { useCartStore } from "@store/cartStore";
import { showInfo, showSuccess } from "@utils/Toasts";
import { ArrowLeft, Coffee, Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
// import CartEmpty from "../CartEmpty/CartEmpty";

const Basket: React.FC = () => {
  const {cart , decreaseQuantity , increaseQuantity , removeFormCart} = useCartStore();

  const handleRemovedAllMenu = ()=>{
    Swal.fire({
      icon:'warning',
      title:"آیا اطمینان دارید از حذف کلی سبد خرید ؟",
      confirmButtonText:'بله',
      confirmButtonColor:'green',
      showCancelButton:true,
      cancelButtonText:"نه",
      cancelButtonColor:"red",
    }).then((result)=>{
      if(result.isConfirmed){
        showSuccess('کل سبد خرید حذف شد')
      }
    })
  }

  return (
        // <CartEmpty/>
    <section className="py-10">
      <div className="container px-16">
        <h1 className="mb-8 text-3xl font-sansBold font-black">سبد خرید</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 gap-">
              {cart.length === 0 && <p>سبد خرید شما خالی است</p>}
              {cart?.map((order)=>(
              <div className="rounded-xl bg-white p-5 shadow-md" key={order.id}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  {/* Product info */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-bold">{order.name}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.9rem]">
                          سایز: {order.size && order.size === 'large' ? 'بزرگ':order.size === 'medium'?'متوسط' : order.size === 'small' ? 'کوچیک  ':'ندارد'}
                        </span>
                        <span className="text-[0.9rem]">
                          قیمت واحد: {Number(order.base_price).toLocaleString("fa-IR")} تومان
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-9 w-9" aria-label="minus"
                          onClick={()=> decreaseQuantity(order.id)}
                        >
                        <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-bold">{order.quantity}</span>
                        <Button variant="outline" size="icon" className="h-9 w-9" aria-label="plus"
                        onClick={()=>increaseQuantity(order.id)}
                        >
                        <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    {/* Item Total */}
                    <span className="min-w-[100px] text-left font-black font-sansBold text-copper">
                      {(Number(order.base_price) * order.quantity).toLocaleString('fa-IR')} تومان
                    </span>
                    {/* Delete Button */}
                        <Button variant='ghost' size='icon' className="text-danger hover:bg-danger/10"
                            onClick={
                              ()=>{
                                removeFormCart(order.id)
                                showInfo('محصول مورد نظر از سبد خرید حذف شد')
                              }
                            }
                          >
                            <Trash2 className="h-4 w-4"/>
                        </Button>
                  </div>
                </div>
              </div>
              ))}

            </div>
            {/* Deleted All  */}
            {cart?.length !== 0 && (
          <div className="mt-4 flex justify-end">
            <Button variant='outline' className="text-danger" 
            onClick={handleRemovedAllMenu}
            >
                <Trash2 className="ml-2 h-4 w-4"/>
                پاک کردن سبد
            </Button>
          </div>
            )}
          </div>
          {/* Orders summary */}
          <div>
            <div className="sticky top-24 rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold font-sansBold">خلاصه سفارش</h3>
                <div className="mb-4 max-h-[250px] space-y-3 overflow-y-auto border-b border-border pb-4">
                    <div className="flex justify-between">
                        <span>
                            امریکانو(متوسط) * 2
                        </span>
                        <span>
                            {(98000 * 2).toLocaleString('fa-IR')}
                        </span>
                    </div>
                </div>
                <div className="mb-2 flex justify-between text-lg">
                    <span>تعداد کل اقلام</span>
                    <span>2</span>
                </div>
                <div className="mb-6 flex justify-between text-xl font-bold font-sansBold">
                    <span>مجموع :</span>
                    <span>{(98000 * 2).toLocaleString('fa-IR')}</span>
                </div>
                <Button className="w-full" size='lg' asChild>
                  <NavLink to='/Order'>
                    ادامه و انتخاب شعبه
                    <ArrowLeft className="mr-2 h-5 w-5"/>
                  </NavLink>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
