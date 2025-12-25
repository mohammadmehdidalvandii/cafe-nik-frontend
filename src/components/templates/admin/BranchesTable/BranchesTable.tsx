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
import { Clock, Eye, MapPin, Search } from "lucide-react";
import React, { lazy } from "react";
const CreateBranchModel = lazy(()=>import('@models/CreateBranchModel'));
const BranchDetailsModel = lazy(()=>import('@models/BranchDetailsModel'));

const BranchesTable: React.FC = () => {
  return (
    <section className="space-y-4 mt-8">
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="جستجو شعبه" className="pr-10" />
        </div>
          <CreateBranchModel/>
        <div className="text-sm text-muted-foreground">
          {(25).toLocaleString("fa-IR")} شعبه
        </div>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="text-right">نام شعبه</TableHead>
              <TableHead className="text-right">شهر</TableHead>
              <TableHead className="text-right">آدرس</TableHead>
              <TableHead className="text-right">تلفن</TableHead>
              <TableHead className="text-right">ساعت کاری</TableHead>
              <TableHead className="text-right">سفارش</TableHead>
              <TableHead className="text-right">درآمد</TableHead>
              <TableHead className="text-right">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* <TableRow>
                        <TableCell colSpan={6} className='text-center py-10 text-muted-foreground'>شعبه ای یافت نشد</TableCell>
                    </TableRow> */}

            <TableRow className="hover:bg-secondary/30">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">شعبه ونک</p>
                </div>
              </TableCell>
              <TableCell>تهران</TableCell>
              <TableCell className="max-w-[200px] truncate">
                خیابان ونک، نبش کوچه ۱۲
              </TableCell>
              <TableCell dir="ltr" className="text-right">
                021-88776655
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="flex items-center gap-1 text-sm" />۸ صبح تا
                  ۱۱ شب
                </div>
              </TableCell>
              <TableCell>{(0).toLocaleString("fa-IR")}</TableCell>
              <TableCell className="font-bold text-copper">
                {(0).toLocaleString("fa-IR")}
              </TableCell>
              <TableCell>
                <BranchDetailsModel/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default BranchesTable;
