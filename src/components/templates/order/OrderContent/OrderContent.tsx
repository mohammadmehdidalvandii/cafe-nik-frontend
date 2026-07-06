import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { Label } from "@components/UI/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/UI/Select";
import { useRegisterGuest } from "@services/auth";
import { useGetAllBranches, UseGetAllCities } from "@services/branch.services";
import { useCreateOrder } from "@services/orders.services";
import { useAuthStore } from "@store/authStore";
import { useCartStore } from "@store/cartStore";
import { generatePersianDates, generateTimeSlots } from "@utils/HelperDate";
import { showError, showInfo } from "@utils/Toasts";
import {
  ArrowLeft,
  Calendar,
  Check,
  Coffee,
  MapPin,
  ShoppingBag,
  User,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BranchesProps } from "types/branch";
import Swal from "sweetalert2";

const OrderContent: React.FC = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { data: Cities } = UseGetAllCities();
  const { data: Branches } = useGetAllBranches();
  const registerGuest = useRegisterGuest();
  const createOrder = useCreateOrder();

  const [cityID, setCityID] = useState("all");
  const [branchId, setBranchId] = useState("all");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");


  const filteredBranch = useMemo(() => {
    return Branches?.filter(
      (branch: BranchesProps) => branch.city_id === cityID,
    );
  }, [cityID, Branches]);

  const filteredInfoBranch = useMemo(() => {
    return filteredBranch?.filter(
      (branch: BranchesProps) => branch.id === branchId,
    );
  }, [branchId, filteredBranch]);

  const dates = generatePersianDates(7);
  const times = generateTimeSlots(10, 23, 30);
  const dataFA = new Date(selectDate).toLocaleDateString("fa-IR");

  const subTotal =
    cart &&
    cart?.reduce((od, item) => od + Number(item.base_price) * item.quantity, 0);

  const submitOrder = (userId: string) => {
    createOrder.mutate(
      {
        user_id: userId,
        branch_id: branchId,
        delivery_date: selectDate,
        delivery_time: selectTime,
        items: cart.map((item) => ({
          menu_id: item.id,
          size: item.size,
          quantity: item.quantity,
        })),
      },
      {
        onSuccess: (data) => {
          Swal.close();
          navigate(`/OrderConfirm/${data.data.id}`);
          clearCart();
        },
        onError: (error) => {
          showError(error.message || "سفارش با خطا مواجه شد");
        },
      },
    );
  };

  const isLoading = registerGuest.isPending || createOrder.isPending;

  const loadingText = registerGuest.isPending 
  ? 'درحال ثبت نام کاربر مهمان ...' 
  : createOrder.isPending
  ? 'در حال ثبت سفارش ...'
  : "ثبت سفارش";



  const handleOrderUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isAuthenticated) {
      if (!username.trim()) {
      showError("لطفا نام و نام خانوادگی را وارد کنید");
      return;
    }
    if (!phone.trim()) {
      showError("لطفا شماره تماس را وارد کنید");
      return;
    }
    if (!/^09\d{9}$/.test(phone)) {
      showError("شماره تماس معتبر نیست");
      return;
    }
      if (cityID === "all") {
    showError("لطفا شهر را انتخاب کنید");
    return;
  }
  if (branchId === "all") {
    showError("لطفا شعبه را انتخاب کنید");
    return;
  }
  if (!selectDate) {
    showError("لطفا تاریخ تحویل را انتخاب کنید");
    return;
  }
  if (!selectTime) {
    showError("لطفا ساعت تحویل را انتخاب کنید");
    return;
  }
    Swal.fire({
  title: "لطفاً صبر کنید",
  text: "در حال ایجاد حساب کاربری...",
  allowOutsideClick: false,
  allowEscapeKey: false,
  didOpen: () => {
    Swal.showLoading();
  },
});
      registerGuest.mutate(
        { username, phone },
        {
          onSuccess: () => {
            Swal.update({
              title: "در حال ثبت سفارش",
              text: "لطفاً چند لحظه صبر کنید...",
                allowOutsideClick: false,
                allowEscapeKey: false,
                  showConfirmButton: false,
            });
            setTimeout(() => {
              const currentUser = useAuthStore.getState().user;

              if (!currentUser?.id) {
               Swal.close();
                showError("کاربر یافت نشد");
                return;
              }

              submitOrder(currentUser.id);
            }, 2000);
          },
          onError: (error) => { 
            Swal.close();
            if(error.message === 'کاربر از قبل وجود دارد'){
              showInfo('لطفا اول وارد شوید')
              navigate('/Auth/Login')
            }
            showError(error.message);
          },
        },
      );
    } else {
      if (!user?.id) {
        showError("کاربر یافت نشد");
        return;
      }
      submitOrder(user?.id);
    }
  };

  return (
    <section>
      {/* Empty Basket */}
      {cart.length === 0 && (
        <div className="container mx-auto px-8 flex min-h-[60vh] flex-col items-center justify-center py-10">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h1 className="mb-2 text-2xl font-bold">سبد خرید خالی است</h1>
          <p className="mb-6 text-muted-foreground">
            ابتدا محصولات دلخواه را به سبد اضافه کنید
          </p>
          <NavLink to="/Menu">
            <Button>
              مشاهده منو
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </NavLink>
        </div>
      )}

      <div className="container mx-auto px-8 py-10">
        <h1 className="mb-2 text-3xl font-bold">تمکیل سفارش</h1>
        <p className="mb-8 text-muted-foreground">
          شعبه و زمان تحویل را انتخاب کنید
        </p>

        <form action="#">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {/* Guest Info */}
              {!isAuthenticated && (
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                    <User className="h-5 w-5 text-copper" />
                    اطلاعات تماس
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">نام و نام خانوادگی</Label>
                      <Input
                        id="name"
                        placeholder="نام  خود را وارد کنید"
                        className="mt-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input
                        id="phone"
                        placeholder="09123332211"
                        className="mt-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    برای پیگیری سفارش ها {""}
                    <NavLink to="/Auth/Login" className="text-copper underline">
                      وارد شوید
                    </NavLink>
                  </p>
                </div>
              )}
              {/* Branch Selection */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <MapPin className="h-5 w-5 text-copper" />
                  انتخاب شعبه
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>شهر</Label>
                    <Select value={cityID} onValueChange={setCityID}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="انتخاب شهر" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">انتخاب شهر </SelectItem>
                        {Cities?.map((city: any) => (
                          <SelectItem value={city.id} key={city.id}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>شعبه</Label>
                    <Select value={branchId} onValueChange={setBranchId}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="انتخاب شعبه" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">انتخاب شعبه</SelectItem>
                        {filteredBranch?.map((branch: BranchesProps) => (
                          <SelectItem key={branch.id} value={branch.id}>
                            {branch.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {/* Detail branch  */}
                {filteredInfoBranch?.map((branch: BranchesProps) => (
                  <div
                    className="mt-4 rounded-lg bg-secondary/50 p-4 font-bold"
                    key={branch.id}
                  >
                    <p className="text-sm">
                      <strong>آدرس:{branch.address}</strong>
                    </p>
                    <p className="text-sm mt-1">
                      <strong>ساعت کاری:8 صبح تا 11 شب</strong>
                    </p>
                    <p className="text-sm mt-1">
                      <strong>تلفن:{branch.phone}</strong>
                    </p>
                  </div>
                ))}
              </div>
              {/* Date & Time */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <Calendar className="h-5 w-5 text-copper" />
                  زمان تحویل
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>تاریخ</Label>
                    <Select value={selectDate} onValueChange={setSelectDate}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="انتخاب تاریخ" />
                      </SelectTrigger>
                      <SelectContent>
                        {dates.map((dt: any) => (
                          <SelectItem key={dt.value} value={dt.value}>
                            {dt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>ساعت</Label>
                    <Select value={selectTime} onValueChange={setSelectTime}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="انتخاب ساعت" />
                      </SelectTrigger>
                      <SelectContent>
                        {times.map((time) => (
                          <SelectItem key={time.value} value={time.value}>
                            {time.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            {/* Order Summary */}
            <div>
              <div className="sticky top-28 rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold">خلاصه سفارش</h3>
                <div className="mb-4 max-h-[300px] space-y-3 overflow-y-auto border-b border-border pb-4">
                  <div className="text-sm">
                    {cart?.map((menu) => (
                      <div className="flex items-start gap-2" key={menu.id}>
                        <Coffee className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span>
                              {menu.name} (
                              {menu.size === "small"
                                ? "کویچک"
                                : menu.size === "medium"
                                  ? "متوسط"
                                  : menu.size === "large"
                                    ? "بزرگ"
                                    : "ندارد"}
                              )
                            </span>
                            <span>{menu.quantity} x</span>
                          </div>
                          <div className="mt-0.5 text-muted-foreground">
                            {(
                              Number(menu.base_price) * menu.quantity
                            ).toLocaleString("fa-IR")}{" "}
                            تومان
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6 flex justify-between text-lg font-bold">
                  <span>مجموع</span>
                  <span className="text-copper">
                    {subTotal.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
                {/* Info delivery */}
                <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="h-4 w-4" />
                    <span className="font-medium">اطلاعات تحویل</span>
                  </div>
                  <div className="mr-6 mt-1 space-y-1 text-muted-foreground">
                    <p>شعبه : {filteredInfoBranch?.[0]?.name ?? "-"}</p>
                    <p>
                      تاریخ : {dataFA}
                      <br />
                      ساعت : {selectTime}
                    </p>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  onClick={handleOrderUser}
                  disabled={isLoading}
                >
                  {loadingText}
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderContent;
