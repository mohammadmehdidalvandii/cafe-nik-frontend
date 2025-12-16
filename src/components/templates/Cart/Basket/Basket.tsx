import { Button } from "@components/UI/Button";
import { ArrowLeft, Coffee, Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
// import CartEmpty from "../CartEmpty/CartEmpty";

const Basket: React.FC = () => {
  return (
        // <CartEmpty/>
    <section className="py-10">
      <div className="container px-16">
        <h1 className="mb-8 text-3xl font-sansBold font-black">سبد خرید</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 gap-">
              <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  {/* Product info */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-bold">آمریکانو</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.9rem]">
                          سایز: متوسط
                        </span>
                        <span className="text-[0.9rem]">
                          قیمت واحد: {(98000).toLocaleString("fa-IR")} تومان
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-9 w-9" aria-label="minus">
                        <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-bold">1</span>
                        <Button variant="outline" size="icon" className="h-9 w-9" aria-label="plus">
                        <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    {/* Item Total */}
                    <span className="min-w-[100px] text-left font-black font-sansBold text-copper">
                      {(98000).toLocaleString('fa-IR')} تومان
                    </span>
                    {/* Delete Button */}
                        <Button variant='ghost' size='icon' className="text-danger hover:bg-danger/10">
                            <Trash2 className="h-4 w-4"/>
                        </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  {/* Product info */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-bold">آمریکانو</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.9rem]">
                          سایز: متوسط
                        </span>
                        <span className="text-[0.9rem]">
                          قیمت واحد: {(98000).toLocaleString("fa-IR")} تومان
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-9 w-9" aria-label="minus">
                        <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-bold">1</span>
                        <Button variant="outline" size="icon" className="h-9 w-9" aria-label="plus">
                        <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    {/* Item Total */}
                    <span className="min-w-[100px] text-left font-black font-sansBold text-copper">
                      {(98000).toLocaleString('fa-IR')} تومان
                    </span>
                    {/* Delete Button */}
                        <Button variant='ghost' size='icon' className="text-danger hover:bg-danger/10">
                            <Trash2 className="h-4 w-4"/>
                        </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Deleted All  */}
          <div className="mt-4 flex justify-end">
            <Button variant='outline' className="text-danger">
                <Trash2 className="ml-2 h-4 w-4"/>
                پاک کردن سبد
            </Button>
          </div>
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
                <Button className="w-full" size='lg'>
                    ادامه و انتخاب شعبه
                    <ArrowLeft className="mr-2 h-5 w-5"/>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
