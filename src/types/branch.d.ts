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