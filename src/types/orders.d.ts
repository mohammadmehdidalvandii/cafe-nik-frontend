export type OrdersProps ={
    id:string,
    delivery_date:date,
    delivery_time:date,
    total_price:number,
    branch:{
        id:string,
        name:string,
    },
    user:{
        username:string,
        phone:string
    },
    order_items:{
        id:string
        quantity:number,
        unit_price:number
        menu:{
            name:string,
        }
        size:string|'',
    }[],
    createdAt:string,
    status:string,
    pickup_code:string
};

export type OrderCreateProps ={
    user_id:string,
    branch_id:string,    
    delivery_date:string
    delivery_time:string,
    items:{
        menu_id:string;
        size:string | null,
        quantity:number
    }[]
}