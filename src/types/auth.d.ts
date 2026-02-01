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