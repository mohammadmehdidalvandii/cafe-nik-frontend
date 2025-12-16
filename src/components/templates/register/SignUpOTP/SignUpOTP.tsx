import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { Label } from "@components/UI/Label";
import React, { useState } from "react";

const SignUpOTP: React.FC = () => {
  const [sentCode, setSentCode] = useState(false);
  return (
    <form action="#" className="space-y-4">
      {!sentCode ? (
        <>
          <div>
            <Label htmlFor="phone-number">شماره تلفن</Label>
            <Input
              id="phone-number"
              type="tel"
              className="mt-1"
              placeholder="09123334455"
            />
          </div>
          <Button type="submit" className="w-full">
            ارسال شماره تلفن
          </Button>
        </>
      ) : (
        <>
          <div>
            <Label htmlFor="code">کد تایید</Label>
            <Input
              id="code"
              type="text"
              className="mt-1"
              placeholder="لطفا کد 6 رقمی وارد کنید"
            />
          </div>
          <Button type="submit" className="w-full">
            ارسال  کد
          </Button>
        </>
      )}
    </form>
  );
};

export default SignUpOTP;
