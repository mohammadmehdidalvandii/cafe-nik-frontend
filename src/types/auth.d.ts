export interface registerValues {
    fullName:string,
    email:string,
    phone:string,
    password:string
}

export type SignUpOTPFormValues = {
  phone: string
  code: string
  sentCode: boolean
}

export type RegisterPhonePayload = {
  phone: string
}

export type RegisterPhoneCodePayload = {
  phone: string
  code: string
}

export type LoginWithPassword = {
  email:string,
  password:string
}


export interface LoginWithOTP extends SignUpOTPFormValues{};

export interface LoginPhone extends RegisterPhonePayload{};

export interface LoginPhoneCode extends RegisterPhoneCodePayload{};