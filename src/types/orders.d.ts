export type OrdersProps ={
    id:string,
    delivery_date:date,
    delivery_time:date,
    total_price:number,
    branch:{
        name:string,
    },
    user:{
        username:string,
        phone:string
    },
    updatedAt:date,
    status:string
}