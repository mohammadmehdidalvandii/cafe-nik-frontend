export type BranchCreateProps={
    name:string,
    country:string,
    city_id:string,
    address:string,
    users_id:string | undefined,
    phone:string
}

export type BranchesProps = {
    id:string,
    name:string,
    address:string,
    city_id:string
    phone:string,
    city:{
        name:string,
    },
    user:{
        username:string
    },
    orders_count:number,
    total_revenue:number
}


export type BranchOrderProps ={
    id:string,
    delivery_date:date,
    delivery_time:date,
    createdAt:date,
    status:string,
    total_price:number,
    order_items:{
        id:string,
        menu:{
            id:string,
            name:string,
            size:string|'',
        },
        total_price:number,
        unit_price:number
        quantity:number,
    }[],
    user:{
        id:string,
        username:string,
        phone:string,
    }
}