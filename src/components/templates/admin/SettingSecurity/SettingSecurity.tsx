import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { Label } from "@components/UI/Label";
import { Shield } from "lucide-react";
import React from "react";

const SettingSecurity: React.FC = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center gap-3">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="text-2xl font-bold">امنیت</h3>
        </div>
      <form action="#">
        <div className="space-y-4">
          <div>
            <Label htmlFor="current-password" className="text-lg">رمز عبور فعلی</Label>
            <Input
                id="current-password"
                type="password"
                className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="new-password" className="text-lg">رمز عبور جدید</Label>
            <Input 
                id="new-password"
                type="password"
                className="mt-2"
            />
          </div>
          <Button className="w-full">تغییر رمز عبور</Button>
        </div>
      </form>
    </div>
  );
};

export default SettingSecurity;
