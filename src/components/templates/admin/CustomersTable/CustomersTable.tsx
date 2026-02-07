import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/UI/Table";
import { useGetAllCustomer } from "@services/customers.services";
import { Eye, Search, User } from "lucide-react";
import React, { lazy, useMemo, useState } from "react";
import { CustomerProps } from "types/customer";
const CustomerDetailsModel = lazy(() => import("@models/CustomerDetailsModel"));

const CustomersTable: React.FC = () => {
  const { data } = useGetAllCustomer();
  const [search, setSearch] = useState("");

  const filterCustomers = useMemo(() => {
    if (!data) return [];

    return data.filter((customer: any) => {
      const searchValue = search.trim().toLowerCase();

      return (
        customer.name?.toLowerCase().includes(searchValue) ||
        customer.phone?.includes(searchValue)
      );
    });
  }, [data, search]);

  console.log("f=>", filterCustomers);

  return (
    <div className="space-y-4 mt-8">
      {/* Search */}
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="جستجوی مشتری با نام شماره تلفن"
            className="pr-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {(120).toLocaleString("fa-IR")} مشتری
        </div>
      </div>
      {/* Table */}
      <div className="rounded-xl bg-white shadow-md overflow-hidden p-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="text-right">مشتری</TableHead>
              <TableHead className="text-right">شماره تماس</TableHead>
              <TableHead className="text-right">تعداد سفارش</TableHead>
              <TableHead className="text-right">مجموع سفارش</TableHead>
              <TableHead className="text-right">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterCustomers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-10 text-muted-foreground"
                >
                  مشتری یافت نشد
                </TableCell>
              </TableRow>
            ) : (
              filterCustomers.map((customer:CustomerProps) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{customer.username}</span>
                    </div>
                  </TableCell>

                  <TableCell dir="rtl">{customer.phone}</TableCell>

                  <TableCell>
                    {(customer.order?.length || 0).toLocaleString("fa-IR")}
                  </TableCell>

                  <TableCell className="font-bold text-copper">
                    {
                        (customer.order).reduce((sum: number, o) => sum + o.total_price, 0).toLocaleString('fa-IR')
                    } تومان
                  </TableCell>

                  <TableCell>
                    <CustomerDetailsModel/>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomersTable;
