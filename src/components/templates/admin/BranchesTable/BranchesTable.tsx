import { Input } from "@components/UI/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/UI/Table";
import { useGetAllBranches } from "@services/branch.services";
import { Clock,MapPin, Search } from "lucide-react";
import React, { lazy, useMemo, useState } from "react";
import { BranchesProps } from "types/branch";
const CreateBranchModel = lazy(()=>import('@models/CreateBranchModel'));
const BranchDetailsModel = lazy(()=>import('@models/BranchDetailsModel'));
const AddManagerBranchModel = lazy(()=>import('@models/AddManagerBranchModel'));

const BranchesTable: React.FC = () => {
  const {data} = useGetAllBranches();
  const [search , setSearch] = useState('');
  
  const filteredBranches = useMemo(()=>{
    return data?.filter((branch:BranchesProps)=>{
      const matchSearch =  branch.name.includes(search)
      || branch.city.name.includes(search) || branch.id.includes(search);

      return matchSearch
    })
  },[data , search]);

  return (
    <section className="space-y-4 mt-8">
      <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="جستجو شعبه" className="pr-10" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
          <AddManagerBranchModel/>
          <CreateBranchModel/>
        <div className="text-sm text-muted-foreground">
          {filteredBranches?.length.toLocaleString('fa-IR')} شعبه
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
            {filteredBranches?.length === 0 && (
               <TableRow>
                          <TableCell colSpan={6} className='text-center py-10 text-muted-foreground'>شعبه ای یافت نشد</TableCell>
              </TableRow> 
            )}
            {filteredBranches?.map((branch:BranchesProps)=>(
            <TableRow className="hover:bg-secondary/30" key={branch.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">شعبه {branch.name}</p>
                </div>
              </TableCell>
              <TableCell>{branch.city.name}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {branch.address}
              </TableCell>
              <TableCell dir="ltr" className="text-right">
                {branch.phone}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="flex items-center gap-1 text-sm" />۸ صبح تا
                  ۱۱ شب
                </div>
              </TableCell>
              <TableCell>{branch.orders_count.toLocaleString("fa-IR")}</TableCell>
              <TableCell className="font-bold text-copper">
                {branch.total_revenue.toLocaleString("fa-IR")}
              </TableCell>
              <TableCell>
                <BranchDetailsModel/>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default BranchesTable;
